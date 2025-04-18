import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Beauty from './pages/Beauty';
import Living from './pages/Living';
import Details from './pages/Details';
import CartDetails from './pages/CartDetails';
import PaymentPage from './pages/PaymentPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/beauty" element={<Beauty />} />
      <Route path="/living" element={<Living />} />
      <Route path="/details" element={<Details />} />
      <Route path="/cart" element={<CartDetails />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
}

export default App;
