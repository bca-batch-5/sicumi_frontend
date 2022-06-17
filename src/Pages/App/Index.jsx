import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutHome from "../../Layouts/Home/Home";
import "../../Styles/App.css";
import ChangePassword from "../ChangePassword/ChangePassword";
import ChangePhone from "../ChangePhone/ChangePhone";
import ChangePin from "../ChangePin/ChangePin";
import ManagePhone from "../ManagePhone/ManagePhone";
import EditPersonalInformation from "../PersonalInformation/EditPersonalInformation";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import EditImgProfile from "../Profile/EditImgProfile";
import Profile from "../Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/Layout" element={<LayoutHome />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/PersonalInformation" element={<PersonalInformation />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/ChangePin" element={<ChangePin />} />
        <Route path="/ManagePhone" element={<ManagePhone />} />
        <Route path="/Changephone" element={<ChangePhone />} />
        <Route path="/Edit" element={<EditPersonalInformation />} />
        <Route path="/EditImage" element={<EditImgProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
