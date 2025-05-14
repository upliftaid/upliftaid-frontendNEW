import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import HowItWorks from './pages/HowItWorks';
import Donate from './pages/Donate';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="donate" element={<Donate />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="career" element={<Career />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;