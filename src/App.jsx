import Navbar from './components/navbarcomponent/Navbar'; 
import HomePage from './components/homepage/HomePage';

function App() {
  return (
    <>
      <Navbar />  {/* Endast Navbar-komponenten visas */}
      <HomePage />  {/* Hemsidan visas under Navbar */}
    </>
  );
}

export default App;

