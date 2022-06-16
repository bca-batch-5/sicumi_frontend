import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutHome from "../../Layouts/Home/Home";
import "../../Styles/App.css";
import ChangePassword from "../ChangePassword/ChangePassword";
import ChangePhone from "../ChangePhone/ChangePhone";
import ChangePin from "../ChangePin/ChangePin";
import ManagePhone from "../ManagePhone/ManagePhone";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import Profile from "../Profile/Profile";
import LandingPage from "../Landing/LandingPage";
import LoginPage from "../Login/LoginPage";
import RegisPage from "../Regis/RegisPage";
import RegisPinPage from "../Regis/RegisPinPage";
import RegisSucPage from "../Regis/RegisSucPage";
import ResetPage from "../Reset/ResetPage";
import ResetPassPage from "../Reset/ResetPassPage";

// declare function

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Regis" element={<RegisPage />} />
        <Route path="/Regis/Pin" element={<RegisPinPage />} />
        <Route path="/Regis/Pin/Success" element={<RegisSucPage />} />
        <Route path="/Reset" element={<ResetPage />} />
        <Route path="/Reset/Confirm/:id" element={<ResetPassPage />} />
        <Route path="/Layout" element={<LayoutHome />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/PersonalInformation" element={<PersonalInformation />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/ChangePin" element={<ChangePin />} />
        <Route path="/ManagePhone" element={<ManagePhone />} />
        <Route path="/changephone" element={<ChangePhone />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App;
