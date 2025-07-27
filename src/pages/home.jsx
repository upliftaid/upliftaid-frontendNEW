// merged by yadnesh

import HomePage from '../components/Home/HomePage.jsx'
import Navbar from '../layouts/navbar.jsx'
import MNavbar from '../layouts/mobil-navbar.jsx'
import Footer from '../layouts/footer.jsx'
// import '../home.css'


const Home = () => {
  return (
    <div>
      <MNavbar/>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
};

export default Home;
