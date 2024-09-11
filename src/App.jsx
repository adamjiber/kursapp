import Navbar from "./components/navbarcomponent/Navbar";
import { Login } from "./components/Login/Index";
import UserAtom from "./components/Login/UserAtom";
import { Login } from './components/Login/Index';
import UserAtom from './components/Login/UserAtom';
import Navbar from './components/navbarcomponent/Navbar'; 

function App() {
  return (
    <>
      <Navbar /> {/* Endast Navbar-komponenten visas */}
      <Login />
      <Navbar />  {/* Endast Navbar-komponenten visas */}
      <Login/>
      <UserAtom />
    </>
  );
}

export default App;
