import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar'
import Chat from '../components/Chat/Chat';
import { ProductStore } from '../components/products';
import { CartContainer } from '../components/Productcart';
import { Login } from '../components/Login/Index'
import { Register } from '../components/Register'
import { HomePage } from '../components/Homepage'


function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Hompage" element={<HomePage />} />
        <Route path="/Chat" element={<Chat />} /> 
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Cart" element={<CartContainer />} /> 
        <Route path="/Products" element={<ProductStore />} /> 
      </Routes>
    </Router>
  );
}

export default AppRouter;
