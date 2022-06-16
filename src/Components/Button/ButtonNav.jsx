import React from "react";
import { BbuttonNav } from "../Button/StyledButtonNav";

const ButtonNav = (props) => {
  return <BbuttonNav type="submit">{props.Name}</BbuttonNav>;
};

export default ButtonNav;
