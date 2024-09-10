import Navbar from "./components/navbarcomponent/Navbar";
import productcart from "./productcart";
import { Login } from './components/Login/Index';
import UserAtom from './components/Login/UserAtom';

function App() {
  return (
    <>
      <productcart />
      <Navbar />  {/* Endast Navbar-komponenten visas */}
      <Login/>
    </>
  );
}

export default App;
