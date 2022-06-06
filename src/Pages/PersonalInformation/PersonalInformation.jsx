import React from "react";
import LayoutHome from "../../Layouts/Home/Home";
import { Link } from "react-router-dom";
import { Wrappers, ManagePhone, Title, Desc, Mwrapper } from "./StyledPersonalInfomartion";
import TagInformation from "../../Components/TextBox/TagInformation";
import DetailsInformation from "../../Components/TextBox/DetailsInformation";

const PersonalInformation = () => {
  return (
    <LayoutHome>
      <Wrappers>
        <TagInformation Title="Personal Information" Desc="We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support." />
      </Wrappers>
      <DetailsInformation Title="First Name" Desc="Robert" />
      <DetailsInformation Title="Last Name" Desc="Chandler" />
      <DetailsInformation Title="Verified Email" Desc="pewdiepie1@gmail.com" />
      <ManagePhone>
        <Mwrapper>
          <Title>Phone Number</Title>
          <Desc>+62 813-9387-7946</Desc>
        </Mwrapper>
        <Link to="/managephone" style={{ textDecoration: "none", paddingRight: 50, paddingTop: 15, fontSize: 14 }}>
          Manage
        </Link>
      </ManagePhone>
    </LayoutHome>
  );
};

export default PersonalInformation;
