import React from "react";
import LayoutHome from "../../Layouts/Home/Home";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import profilepict from "../../Images/profilepict.jpg";
import { Wrappers, DescAcc, PhoneAcc, NameAcc } from "./StyledProfile";
import ButtonwArrow from "../../Components/Button/ButtonwArrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  
  return (
    <LayoutHome>
      <Wrappers>
        <img
          src={profilepict}
          alt="none"
          width={80}
          style={{
            display: "center",
            borderRadius: `10px`,
          }}
        />
        <DescAcc>
          <Link to="" style={{ fontSize: 12, textDecoration: "none" }}>
            <FontAwesomeIcon icon={faPencil} style={{ paddingRight: 10 }} />
            Edit
          </Link>
          <NameAcc> Robert Chandler</NameAcc>
          <PhoneAcc> +62 8139 3877 7946</PhoneAcc>
        </DescAcc>

        <Link to="/PersonalInformation" style={{ textDecoration: "none" }}>
          <ButtonwArrow Name="Personal information" />
        </Link>
        <Link to="/ChangePassword" style={{ textDecoration: "none" }}>
          <ButtonwArrow Name="Change Password" />
        </Link>
        <Link to="/ChangePin" style={{ textDecoration: "none" }}>
          <ButtonwArrow Name="Change Pin" />
        </Link>
        <Link to="" style={{ textDecoration: "none" }}>
          <Button Name="Log Out" />
        </Link>
      </Wrappers>
    </LayoutHome>
  );
};

export default Profile;
