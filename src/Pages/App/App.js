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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/regis" element={<RegisPage />} />
          <Route path="/regis/pin" element={<RegisPinPage />} />
          <Route path="/regis/pin/success" element={<RegisSucPage />} />
          <Route path="/reset" element={<ResetPage />} />
          <Route path="/reset/confirm/:id" element={<ResetPassPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
