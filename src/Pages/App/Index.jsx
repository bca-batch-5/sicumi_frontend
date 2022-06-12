import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutHome from "../../Layouts/Home/Home";
import "../../Styles/App.css";
import Dashboard from "../Dashboard/Dashboard";
import History from "../History/History";
import SingUp from "../SignUp/SignUp";
import Contact from "../Contact/Contact";
import Transfer from "../Transfer/Transfer";
import Confirmation from "../Confirmation/Confirmation"
import Status from "../Status/Status"
import TopUp from "../TopUp/TopUp";
// declare function

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/Layout" element={<LayoutHome />} />
        <Route path="/Signup" element={<SingUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/History" element={<History />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Transfer" element={<Transfer />} />
        <Route path="/Confirmation" element={<Confirmation />} />
        <Route path="/Status" element={<Status />} />
        <Route path="/TopUp" element={<TopUp />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
