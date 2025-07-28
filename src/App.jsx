import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Our_story from "./pages/our_story";
 
const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Our_story />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
