import Navbar from "./components/navbarcomponent/Navbar";
import { Login } from "./components/Login/Index";

import UserAtom from "./components/Login/UserAtom";

import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Navbar /> {/* Endast Navbar-komponenten visas */}
      <Login />
      <UserAtom />
      <Chat />
    </>
  );
}

export default App;
