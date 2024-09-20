import Navbar from './components/Navbar/Navbar';
import UserAtom from './components/Login/UserAtom';
import { Login } from './components/Login/Index';
import HomePage from './components/Homepage/HomePage';

function App() {
  return (
    <>
      <Navbar /> {/* Endast Navbar-komponenten visas */}
      <Login />
      <HomePage /> 
      <UserAtom />
    </>
  );
}

export default App;
