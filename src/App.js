import React from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import Header from "./Header";
import About from "./About";
import ProtectedRoute from "./ProtectedRoute";
import PagenotFound from "./PagenotFound";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./index.css";


function App() {
  
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ProtectedRoute Component={Header} />} />
        <Route path="/about" element={<ProtectedRoute Component={About} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route  path="*" element= {<PagenotFound />}/>  
  
      </Routes>
      <Toaster/>
    </>
  );
}

export default App;
