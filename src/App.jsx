import "./App.css";
import BlogDetailPage from "./pages/BlogDetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogDetailPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
