import "./App.css";
import EventDetailsPage from "./pages/EventDetailsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
