// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventPage from "./pages/EventPage";
import Notfound from "./pages/Notfound";
import HomePage from "./pages/HomePage";
import Navbar from "./layout/Navbar";
// import Home from "./pages/home"    // another home page
import BeAVolunteer from "./pages/BeAVolunteer";


function App() {
  return (
    <Router>
         <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/about-us/be-a-volunteer" element={<BeAVolunteer />} />
      </Routes>
    </Router>
  );
}

export default App;
