import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { LabelText, Mailc } from "./StyledInputEmail";

const InputEmail = () => {
  return (
    <LabelText>
      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      <Mailc type="type" placeholder="Enter your email"></Mailc>
    </LabelText>
  );
};

export default InputEmail;
