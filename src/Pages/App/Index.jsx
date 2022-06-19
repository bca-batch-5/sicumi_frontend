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
        <Route path="/Signup" element={<SingUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/History" element={<History />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Transfer" element={<Transfer />} />
        <Route path="/Confirmation" element={<Confirmation />} />
        <Route path="/Status" element={<Status />} />
        <Route path="/TopUp" element={<TopUp />} />

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
