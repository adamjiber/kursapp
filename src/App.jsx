import Navbar from "./components/navbarcomponent/Navbar";
import { Login } from "./components/Login/Index";
import UserAtom from "./components/Login/UserAtom";

function App() {
  return (
    <>
      <Navbar /> {/* Endast Navbar-komponenten visas */}
      <Login />
    </>
  );
}

export default App;
