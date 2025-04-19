import React from "react";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signup/Signin";

import "./pages/signup/auth.css"; // Adjust the path if needed

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
