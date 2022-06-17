import React from "react";
import { Bbutton } from "../Button/StyledButton";

const Button = (props) => {
  return (
    <Bbutton type="submit" onClick={props.onclick}>
      {props.Name}{" "}
    </Bbutton>
  );
};

export default Button;
