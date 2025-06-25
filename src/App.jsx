import "./App.css";
import Footer from "../src/layout/Footer";
import CareerPage from "./pages/Career";
import Navbar from "./layout/Navbar";
import MobileNavbar from "./layout/MobileNavBar";
function App() {

  return (
    <>
      <Navbar/>
      <MobileNavbar/>
      <CareerPage/>
      <Footer/>
    </>
  );
}

export default App;
