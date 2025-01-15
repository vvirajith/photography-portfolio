import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
