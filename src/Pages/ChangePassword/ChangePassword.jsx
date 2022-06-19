import React from "react";
import LayoutHome from "../../Layouts/Home/Home";
import { Link } from "react-router-dom";
import { Wrappers, CenterWrapper } from "./StyledChangePassword";
import TagInformation from "../../Components/TextBox/TagInformation";
// import DetailsInformation from "../../Components/TextBox/DetailsInformation";
import InputPass from "../../Components/Form/InputPass";
import Button from "../../Components/Button/Button";

const ChangePassword = () => {
  return (
    <LayoutHome>
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
    </LayoutHome>
  );
};

export default ChangePassword;
