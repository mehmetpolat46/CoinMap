import millify from 'millify';
import { Chart as Chartjs } from 'chart.js/auto';
import { Line, Bar } from 'react-chartjs-2';

const DetailPageView = ({ model }) => {
  return (
    <div>
      <h3 className="text-center">
        <span className="me-3 fs-4 fw-bold">
          {model?.coin?.symbol}
        </span>
        <span className="fs-3 text-warning">{model?.coin?.name}</span>
      </h3>
      <div className="row my-4">
        <section className="col-md-3 d-flex flex-column gap-5  p-5 p-md-4">
          {model.infoFields.map((data) => (
            <div
              className="text-bg-light rounded shadow-lg shadow-lg text-center py-4 px-2 d-flex flex-column gap-2 "
              key={data.label}
            >
              <span className="">{data.icon}</span>
              <h3 className="fs-6 text-nowrap">{data.label}</h3>
              <p className="fw-bold">{millify(data.value)}</p>
            </div>
          ))}
        </section>
        <section className="col-md-9 pe-2 d-flex flex-column gap-5">
          <Line data={model.chartData} />
          <Bar data={model.chartData} />
        </section>
      </div>
    </div>
  );
};

export default DetailPageView;
