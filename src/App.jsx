import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import Testimonials from "./pages/Testimonials";
import CausePage from "./pages/CausePage";
// import AuthPage from "./pages/Auth/AuthPage";
// import Blog from "./pages/Blog"    // another blog page
import BlogDetailPage from "./pages/BlogDetailPage";
import ProfilePage from "./pages/ProfilePage";
import ProductDetailPage from "./pages/Product/ProductDetailPage";
import ProductCart from "./pages/ProductCart";
import ProductPage from "./pages/ProductPage";
import Blog from "./pages/blog";
import Root from "./root";
import LoginForm from "./pages/Auth/loginForm";
import SignupForm from "./pages/Auth/signupForm";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
// import Layout from "./components/Product2/Layout";
import ProductsPage from "./pages/Product/ProductsPage";
import CartPage from "./pages/Product/CartPage";
import { store } from '../src/redux/store'
import { Provider } from "react-redux";
import DonationPage from "./pages/DonationPage";

function App() {
  const pathname = window.location.pathname;
  return (
    <>
        <Router>
              <Provider store={store}>
          
          <Routes >
            <Route path="/" element={<Root/>}>
              <Route path="/" element={<HomePage />}/>
              <Route path="/events" element={<EventPage />}/>
              <Route path="*" element={<Notfound />}/>
              <Route path="/about-us" element={<About_us />}/>
              <Route path="/about-us/be-a-volunteer" element={<BeAVolunteer />}/>
              <Route path="/about-us/our-story" element={<Our_story />}/>
              <Route path="/about-us/what-we-do" element={<WhatWeDoPage />}/>
              <Route path="/about-us/faq" element={<FAQPage />}/>
              <Route path="/contact" element={<ContactPage />}/>
              <Route path="/career" element={<JoinTeamPage />}/>
              <Route path="/about-us/testimonals" element={<Testimonials />}/>
              <Route path="/causes" element={<CausePage />}/>
              <Route path="/blog" element={<Blog />}/>
              <Route path="/blog/:id" element={<BlogDetailPage />}/>
              <Route path="/profile" element={<ProfilePage />}/>
              {/* <Route path="/product-detail" element={<ProductDetailPage />}/> */}
              {/* <Route path="/cart" element={<ProductCart />}/> */}
              {/* <Route path="/product" element={<ProductPage />}/> */}
              <Route path="/portfolio" element={<Portfolio />}/>
              <Route path="/portfolio/:slug" element={<ProjectDetail />}/>
              <Route path="/product" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/donate" element={<DonationPage />}/>

              {/* <Route path="/" element={<Navigate to="/products" replace />} /> */}
      
        

            </Route>

            <Route path="/auth" element={<LoginForm />}/>
            <Route path="/signup" element={<SignupForm />}/>
            <Route path="/forget-password" element={<ForgetPassword />}/>
            <Route path="/reset-password" element={<ResetPassword />}/>
          </Routes>
              </Provider>
          
        </Router>
      
    </>
  );
}

export default App;
