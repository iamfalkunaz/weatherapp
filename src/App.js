import React from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./index.css";

function App() {
  return (
    <>
    {/* //hello world */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Toaster/>
    </>
  );
}

export default App;
