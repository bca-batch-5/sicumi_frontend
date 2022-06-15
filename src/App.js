import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisPage from "./pages/RegisPage";
import RegisPinPage from "./pages/RegisPinPage";
import RegisSucPage from "./pages/RegisSucPage";
import ResetPage from "./pages/ResetPage";
import ResetPassPage from "./pages/ResetPassPage";

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
