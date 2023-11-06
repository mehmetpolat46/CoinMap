import { useFormik } from 'formik';
import { schema } from '../schema';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  // useFormik > formik çzelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    // formda tutulacak verilerin ilk değerleri
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirm_password: '',
    },
    // formun gönderilme olayında çalışır
    onSubmit: async (values, actions) => {
      // api similasyonu
      await new Promise((resolve) => setTimeout(resolve, 1900));

      // kullanıcyı lokale gönder
      localStorage.setItem(
        'user',
        JSON.stringify({ ...values, id: v4() })
      );

      // anasyafaya yönlendir
      navigate('/home');

      // formu temizler
      actions.resetForm();
    },
    // doğrulama şeması
    validationSchema: schema,
  });

  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src="/public/a.png" alt="logo" />
          <h2>CoinMap</h2>
        </div>

        {/* form alanı */}
        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data, key) => (
            <InputField formik={formik} data={data} key={key} />
          ))}
          <button disabled={formik.isSubmitting} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

// ınputlar için dizi
const inputs = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Age',
    name: 'age',
    type: 'number',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
  },
  {
    label: 'Confirm Password',
    name: 'confirm_password',
    type: 'password',
  },
];

// Input Alanı Bileşeni
const InputField = ({ formik, data }) => {
  const { label, name, type } = data;

  return (
    <div>
      <label>{label}</label>
      <input
        value={formik.values[name]}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        type={type}
      />
      {/* inputla ile alakalı bir hata varsa ekrana bas */}
      {formik.touched[name] && formik.errors[name] && (
        <span>{formik.errors[name]}</span>
      )}
    </div>
  );
};
