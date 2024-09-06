import { Login } from './components/Login/Index';
import UserAtom from './components/Login/UserAtom';
import Navbar from './components/navbarcomponent/Navbar'; 

function App() {
  return (
    <>
      <Navbar />  {/* Endast Navbar-komponenten visas */}
      <Login/>
    </>
  );
}

export default App;
