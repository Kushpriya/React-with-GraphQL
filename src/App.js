import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import GetBlogs from './components/GetBlogs';
import Login from './components/Login';

function App() {
  return (
    <>
      <Navbar />
      {/* <div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<GetBlogs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      {/* </div> */}
    </>
  );
}

export default App;
