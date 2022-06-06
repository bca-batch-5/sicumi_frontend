import React from "react";
import LayoutHome from "../../Layouts/Home/Home";
import { Link } from "react-router-dom";
import { Wrappers, CenterWrapper } from "./StyledChangePin";
import TagInformation from "../../Components/TextBox/TagInformation";
import Button from "../../Components/Button/Button";
import Pin from "../../Components/Pin/Pin";

const ChangePin = () => {
  return (
    <LayoutHome>
      <Wrappers>
        <TagInformation Title="Change PIN" Desc="Enter your current 6 digits Sicumi PIN below to continue to the next steps." />
      </Wrappers>
      <br />
      <br />
      <CenterWrapper>
        <Pin />
        <br />
        <br />
        <br />
        <CenterWrapper>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <Button Name="Change PIN" />
          </Link>
        </CenterWrapper>
      </CenterWrapper>
    </LayoutHome>
  );
};

export default ChangePin;
