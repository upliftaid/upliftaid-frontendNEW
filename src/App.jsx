import "./App.css";
import EventPage from "./pages/EventPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
