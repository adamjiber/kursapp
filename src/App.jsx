import Navbar from "./components/navbarcomponent/Navbar";
import productcart from "./productcart";

function App() {
  return (
    <>
      <productcart />
      <Navbar /> {/* Endast Navbar-komponenten visas */}
    </>
  );
}

export default App;
