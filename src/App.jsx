// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventPage from "./pages/EventPage";
import Notfound from "./pages/Notfound";
import HomePage from "./pages/HomePage";
// import Home from "./pages/home"    // another home page
import BeAVolunteer from "./pages/BeAVolunteer";
import About_us from "./pages/About_us";
import Our_story from "./pages/our_story";
import WhatWeDoPage from "./pages/WhatWeDoPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import JoinTeamPage from "./pages/Career2";
import Navbar from "./layout/Navbar";
import MobileNavbar from "./layout/MobileNavBar";
import Footer from "./layout/Footer";
import Testimonials from "./pages/Testimonials";
import CausePage from "./pages/CausePage";
// import AuthPage from "./pages/AuthPage";


function App() {
  return (
    <Router>
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/about-us" element={<About_us />} />
        <Route path="/about-us/be-a-volunteer" element={<BeAVolunteer />} />
        <Route path="/about-us/our-story" element={<Our_story />} />
        <Route path="/about-us/what-we-do" element={<WhatWeDoPage />} />
        <Route path="/about-us/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/career" element={<JoinTeamPage />} />   {/*career page build by manav juneja at branch CareerPage-mana*/}
        <Route path="/about-us/testimonals" element={<Testimonials />} />
        <Route path="/causes" element={<CausePage />} />
        {/* <Route path="/auth" element={<AuthPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
