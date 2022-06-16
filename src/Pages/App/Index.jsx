import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../Landing/LandingPage";
import LoginPage from "../Login/LoginPage";
import RegisPage from "../Regis/RegisPage";
import RegisPinPage from "../Regis/RegisPinPage";
import RegisSucPage from "../Regis/RegisSucPage";
import ResetPage from "../Reset/ResetPage";
import ResetPassPage from "../Reset/ResetPassPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Regis" element={<RegisPage />} />
          <Route path="/Regis/Pin" element={<RegisPinPage />} />
          <Route path="/Regis/Pin/Success" element={<RegisSucPage />} />
          <Route path="/Reset" element={<ResetPage />} />
          <Route path="/Reset/Confirm/:id" element={<ResetPassPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
