"use client";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/page";
import Gallery from "./Gallery/page";
import AboutUs from "./AboutUs/page";
import { AnimatePresence } from "framer-motion";


const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    
    <AnimatePresence mode="wait">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </AnimatePresence>
    
  ) : null;
};

export default Page;
