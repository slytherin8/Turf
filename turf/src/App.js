import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TurfDetails from "./pages/TurfDetails";
import Settings from "./pages/Settings";
import AuthSuccess from "./pages/AuthSuccess";


function App() {

  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>

      <Navbar setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth/success" element={<AuthSuccess />} />

        <Route path="/turf-details" element={<TurfDetails />} />
        <Route path="/settings" element={<Settings />} />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;