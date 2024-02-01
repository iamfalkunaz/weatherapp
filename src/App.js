import React from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import Header from "./Header";
import AboutUs from "./AboutUs";
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
        <Route path="/aboutus" element={<ProtectedRoute Component={AboutUs} />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route  path="*" element= {<PagenotFound />}/>
        
  
      </Routes>
      <Toaster/>
    </>
  );
}

export default App;
