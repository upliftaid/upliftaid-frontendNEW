import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventPage from "./pages/EventPage";
import Notfound from "./pages/Notfound";
import HomePage from "./pages/HomePage";
// import Home from "./pages/home"    // another home page
import BeAVolunteer from "./pages/BeAVolunteer";
import About_us from "./pages/About_us";
import Our_story from "./pages/our_story";
import WhatWeDoPage from "./pages/WhatWeDoPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import JoinTeamPage from "./pages/Career2";
import Navbar from "./layout/Navbar";
import MobileNavbar from "./layout/MobileNavBar";
import Footer from "./layout/Footer";
import Testimonials from "./pages/Testimonials";
import CausePage from "./pages/CausePage";
import AuthPage from "./pages/AuthPage";
// import Blog from "./pages/Blog"    // another blog page
import BlogDetailPage from "./pages/BlogDetailPage";
import ProfilePage from "./pages/ProfilePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductCart from "./pages/ProductCart";
import ProductPage from "./pages/ProductPage";
import Blog from "./pages/blog";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./layout/ScrollToTop";
import DonationPage from "./pages/DonationPage";

function App() {
  const pathname = window.location.pathname;
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <MobileNavbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/events"
            element={<EventPage />}
          />
          <Route
            path="*"
            element={<Notfound />}
          />
          <Route
            path="/about-us"
            element={<About_us />}
          />
          <Route
            path="/about-us/be-a-volunteer"
            element={<BeAVolunteer />}
          />
          <Route
            path="/about-us/our-story"
            element={<Our_story />}
          />
          <Route
            path="/about-us/what-we-do"
            element={<WhatWeDoPage />}
          />
          <Route
            path="/about-us/faq"
            element={<FAQPage />}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
          />
          <Route
            path="/career"
            element={<JoinTeamPage />}
          />{" "}
          {/*career page build by manav juneja at branch CareerPage-mana*/}
          <Route
            path="/about-us/testimonals"
            element={<Testimonials />}
          />
          <Route
            path="/causes"
            element={<CausePage />}
          />
          {/* <Route path="/blog" element={<Blog />} /> */}{" "}
          {/*another blog page*/}
          <Route
            path="/blog"
            element={<Blog />}
          />
          <Route
            path="/blog/:id"
            element={<BlogDetailPage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
          <Route
            path="/product-detail"
            element={<ProductDetailPage />}
          />
          <Route
            path="/cart"
            element={<ProductCart />}
          />
          <Route
            path="/product"
            element={<ProductPage />}
          />
          <Route
            path="/auth"
            element={<AuthPage />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />
          <Route
            path="/portfolio/:slug"
            element={<ProjectDetail />}
          />
          <Route
            path="/donate"
            element={<DonationPage />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
