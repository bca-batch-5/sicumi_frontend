import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { LabelText, Passc } from "./StyledInputPass";
import { useState } from "react";

const InputPass = (props) => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(faEyeSlash);
  const HandleToggle = () => {
    if (type === "password") {
      setIcon(faEye);
      setType("text");
    } else {
      setIcon(faEyeSlash);
      setType("password");
    }
  };

  return (
    <LabelText>
      <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
      <Passc type={type} minLength="8" maxLength="20" placeholder={props.placeholder} value={props.value} id={props.id} onChange={props.onchange} name={props.name}></Passc>
      <FontAwesomeIcon onClick={HandleToggle} icon={icon}></FontAwesomeIcon>
    </LabelText>
  );
};

export default InputPass;
