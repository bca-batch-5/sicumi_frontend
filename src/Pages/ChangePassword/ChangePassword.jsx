import React, { useState } from "react";
import LayoutHome from "../../Layouts/Home/Home";
import { useNavigate } from "react-router-dom";
import { Wrappers, CenterWrapper } from "./StyledChangePassword";
import TagInformation from "../../Components/TextBox/TagInformation";
import InputPass from "../../Components/Form/InputPass";
import Button from "../../Components/Button/Button";
import { updatePasswordAPI } from "../../Services/Users";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
  const [currentpassword, setCurrentPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [renewpassword, setReNewPassword] = useState("");

  const navigate = useNavigate();

  const updatePassword = async () => {
    const data = {
      currentpassword,
      newpassword,
      renewpassword,
    };

    const res = await updatePasswordAPI(data);
    switch (res.data.status) {
      case 200:
        toast.success(res.data.message, {
          position: "top-center",
        });
        const timer = setTimeout(() => navigate("/profile"), 5000);
        break;

      default:
        toast.warning(res.data.message, {
          position: "top-center",
        });
        break;
    }

    console.log("data update: ", res);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await updatePassword();
    setCurrentPassword("");
    setNewPassword("");
    setReNewPassword("");
  };

  return (
    <LayoutHome>
      <Wrappers>
        <TagInformation Title="Change Password" Desc="You must enter your current password and then type your new password twice." />
      </Wrappers>
      <CenterWrapper>
        <InputPass placeholder="Current Password" name="currentpassword" id="currentpassword" value={currentpassword} onchange={(e) => setCurrentPassword(e.target.value)} />
        <br />
        <InputPass placeholder="New Password" name="newpassword" id="newpassword" value={newpassword} onchange={(e) => setNewPassword(e.target.value)} />
        <br />
        <InputPass placeholder="Repeat New Password" name="renewpassword" id="renewpassword" value={renewpassword} onchange={(e) => setReNewPassword(e.target.value)} />
        <br />
        <br />
        <br />
        {/* <Link to="/profile" style={{ textDecoration: "none" }}> */}
        <Button Name="Change Password" onclick={onSubmit} />

        {/* </Link> */}
      </CenterWrapper>
      <ToastContainer />
    </LayoutHome>
  );
};

export default ChangePassword;
