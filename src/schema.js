import * as yup from 'yup';

// şifreyi kısıtlamak için kurallar
const regex =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

// Doğrulama şeması oluşturma:
export const schema = yup.object().shape({
  // email için zorunlulukları belirleme
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required Field'),

  age: yup
    .number()
    .min(18, 'People under 18 cannot enter')
    .max(100, 'You cannot be older than 100')
    .integer('Your age must be an integer'),

  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    // yazı belirlediğimiz kurallarala eşleşiyo mu bakar
    .matches(regex, 'Your password is not strong enough')
    .required('Required Field'),

  confirm_password: yup
    .string()
    //   oneOf : elemanın değeri verilen değerlerden biriyle eşeleşiyor mu kontrol eder
    .oneOf(
      // ref: farklı bir inputtan veri çağırmay yarar
      [yup.ref('password')],
      'Password does not match'
    )
    .required('Required Field'),
});
