import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { LabelText, Unc } from "./StyledInputUn";

const InputUn = () => {
  return (
    <LabelText>
      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
      <Unc type="type" placeholder="Enter your username"></Unc>
    </LabelText>
  );
};

export default InputUn;
