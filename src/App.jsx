import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About_us from "./pages/About_us";
 
const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<About_us />} />
        

      </Routes>
    </BrowserRouter>
  );
};

export default App;
