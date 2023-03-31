import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact/Contact';
import OurStore from './pages/OurStore/OurStore';
import Blog from './pages/Blog/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPass from './pages/ForgotPass';
import Sigup from './pages/Sigup';
import ResetPass from './pages/ResetPass';
import SingleBlog from './pages/SingleBlog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="compare" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-pass" element={<ForgotPass />} />
            <Route path="sign-up" element={<Sigup />} />
            <Route path="reset-pass" element={<ResetPass />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
