import "./App.css";
import NewsDetailPage from "./pages/NewsDetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewsDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
