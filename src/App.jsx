import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import MainPageController from './controllers/MainPageController';
import HeaderView from './views/HeaderView';
import DetailPageController from './controllers/DetailPageController';
import axios from 'axios';
axios.defaults.baseURL = 'https://api.coincap.io/v2';

function App() {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<MainPageController />} />
        <Route path="/coin/:id" element={<DetailPageController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
