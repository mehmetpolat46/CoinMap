import axios from 'axios';
import MainPageView from '../views/MainPageView';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [popular, setPopular] = useState(null);

  // url'deki arama parametrelerine erişme
  const [params] = useSearchParams();
  const page = params.get('page');

  useEffect(() => {
    axios
      .get(`/assets?limit=15&offset=${page ? page : 1}`)
      .then((res) => {
        setCoins(coins.concat(res.data.data));
        if (!popular) {
          setPopular(res.data.data.slicee(0, 3));
        }
      });
  }, [params]);

  return <MainPageView popular={popular} coins={coins} />;
};

export default MainPageController;
