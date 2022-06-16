import React from "react";
import LayoutHome from "../../Layouts/Home/Home";
import { Link } from "react-router-dom";
import { Wrappers, CenterWrapper, Unc, LabelText } from "./StyledChangePhone";
import TagInformation from "../../Components/TextBox/TagInformation";
import Button from "../../Components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ChangePhone = () => {
  const NumericOnly = (e) => {
    const reg = /^[0-9\b]+$/;
    let preval = e.target.value;
    if (e.target.value === "" || reg.test(e.target.value)) return true;
    else e.target.value = preval.substring(0, preval.length - 1);
  };
  return (
    <LayoutHome>
      <Wrappers>
        <TagInformation Title="Add Phone Number" Desc="Add at least one phone number for the transfer ID so you can start transfering your money to another user." />
      </Wrappers>
      <br />
      <br />
      <CenterWrapper>
        <LabelText>
          <FontAwesomeIcon icon={faPhone} style={{ paddingRight: 10 }}></FontAwesomeIcon>
          +62
          <Unc type="type" placeholder="Enter your phone number" onChange={NumericOnly} maxLength="13"></Unc>
        </LabelText>
        <br />
        <br />
        <br />
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Button Name="Change Phone Number" />
        </Link>
      </CenterWrapper>
    </LayoutHome>
  );
};

export default ChangePhone;
