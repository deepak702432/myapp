import React from 'react'
//import Navbar from './Navbar'
//import Prenav from './Prenav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import Home from './Home';
import Navbar from './Navbar';
import Course from './Course';
import Affilation from './Affilation';
// import Admission from './Admission';
import Contact from './Contact';
import Library from './Library';

const Layout = () => {
  return (
    <>

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Course" element={<Course />} />
          <Route path="Affilation" element={<Affilation />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Library" element={<Library />} />
          
        </Route>
      </Routes>
    </BrowserRouter>



</>
  )
}

export default Layout
