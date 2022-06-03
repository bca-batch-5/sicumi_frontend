import React from "react";
import { Bbutton } from "../Button/StyledButton";

const Button = (props) => {
  return <Bbutton type="submit">{props.Name}</Bbutton>;
};

export default Button;
