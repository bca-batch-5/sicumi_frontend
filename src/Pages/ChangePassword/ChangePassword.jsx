import React, { useState } from "react";
import LayoutHome from "../../Layouts/Home/Home";
import { Link, useNavigate } from "react-router-dom";
import { Wrappers, CenterWrapper, MainContent } from "./StyledChangePassword";
import TagInformation from "../../Components/TextBox/TagInformation";
// import DetailsInformation from "../../Components/TextBox/DetailsInformation";
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
      <MainContent>
        <Wrappers>
          <TagInformation
            Title="Change Password"
            Desc="You must enter your current password and then type your new password twice."
          />
        </Wrappers>
        <CenterWrapper>
          <InputPass Placeholder="Current Password" />
          <br />
          <InputPass Placeholder="New Password" />
          <br />
          <InputPass Placeholder="Repeat New Password" />
          <br />
          <br />
          <br />
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <Button Name="Change Password" />
          </Link>
        </CenterWrapper>
      </MainContent>
    </LayoutHome>
  );
};

export default ChangePassword;
