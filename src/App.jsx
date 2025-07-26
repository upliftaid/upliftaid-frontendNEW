// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventPage from "./pages/EventPage";
import Notfound from "./pages/Notfound";
import HomePage from "./pages/HomePage";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <Router>
         <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
