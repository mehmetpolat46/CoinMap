import React from 'react';
import LoadMoreView from '../views/LoadMoreView';
import { useSearchParams } from 'react-router-dom';

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams();

  const handleClick = () => {
    // güncel sayfa sayısnı al
    const pageNumber = params.get('page') || 1;

    // url güncelliyicez sayfaı 1 arttırma
    setParams({ page: +pageNumber + 1 });
  };

  return <LoadMoreView handleClick={handleClick} />;
};

export default LoadMoreController;
