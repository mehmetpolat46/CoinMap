import { useNavigate } from 'react-router-dom';

const CardView = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/coin/${data.id}`)}
      className="cardd d-flex flex-column justify-content-between border rounded p-3"
    >
      <div>
        <h3>{data.name}</h3>
        <h6>{data.symbol}</h6>
        <p>{Number(data.priceUsd).toFixed(2)}</p>
      </div>
      <p className="d-flex flex-column">
        <span> Daily Change: </span>
        <span className={data.changePercent24Hr >= 0 ? 'up' : 'down'}>
          % {Number(data.changePercent24Hr).toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default CardView;
