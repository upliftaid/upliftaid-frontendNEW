import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutUsPage /> } />
        <Route path="/about/our-story" element={<OurStoryPage /> } />
        <Route path="/about/what-we-do" element={<WhatWeDoPage /> } />
        <Route path="/about/be-a-volunteer" element={<BeAVolunteerPage /> } />
        <Route path="/about/faq" element={<FAQPage /> } />
        <Route path="/about/testimonals" element={<TestimonalsPage /> } />
        <Route path="/about/gallery" element={<GalleryPage /> } />
        <Route path="/causes" element={<CausesPage /> } />
        <Route path="/events" element={<EventsPage /> } />
        <Route path="/portfolio" element={<PortfolioPage /> } />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactUsPage/> } />
        <Route path="/donate" element={<ContactPage />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
