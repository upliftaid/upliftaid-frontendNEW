import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import BeAVolunteer from "./pages/BeAVolunteer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BeAVolunteer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
