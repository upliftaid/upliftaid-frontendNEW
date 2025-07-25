// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventPage from "./pages/EventPage";
import Home from "./pages/home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EventPage" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;