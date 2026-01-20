import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      <Sidebar open={open} setOpen={setOpen} />
      <Navbar setOpen={setOpen} />
      <Home />
    </div>
  );
}

export default App;
