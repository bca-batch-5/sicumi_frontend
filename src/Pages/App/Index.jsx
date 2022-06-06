import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutHome from "../../Layouts/Home/Home";
import "../../Styles/App.css";
import Dashboard from "../Dashboard/Dashboard";
import SingUp from "../SignUp/SignUp";
// declare function

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/Layout" element={<LayoutHome />} />
        <Route path="/Signup" element={<SingUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
