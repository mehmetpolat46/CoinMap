import { useEffect, useState } from 'react';
import DetailPageView from '../views/DetailPageView';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { DetailModel } from './../models/DetailModel';

const DetailPageController = () => {
  const params = useParams();
  const [coin, setCoin] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get(`/assets/${params.id}`).then((res) => {
      setCoin(res.data.data);
    });

    axios
      .get(`/assets/${params.id}/history?interval=d1`)
      .then((res) => setHistory(res.data.data));
  }, []);

  //   model'den bir instance oluşturma
  let model = new DetailModel(coin, history);

  return <DetailPageView model={model} />;
};

export default DetailPageController;
