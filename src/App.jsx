import "./App.css";
import CauseDetailPage from "./pages/CauseDetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CauseDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
