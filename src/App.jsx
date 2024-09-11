import { Login } from './components/Login/Index';
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
