import Navbar from './components/Navbar/Navbar';
import UserAtom from './components/Login/UserAtom';
import { Login } from './components/Login/Index';
import HomePage from './components/Homepage/HomePage';
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Navbar /> {/* Endast Navbar-komponenten visas */}
      <Login />
      <HomePage />
      <UserAtom />
      <Chat />
    </>
  );
}

export default App;
