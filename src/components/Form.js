import React from "react";
import FormStyled from "../styled/FormStyled";

const Form = (props) => {
  const testing = (e) => {
    e.preventDefault();

    const btnType = e.target[e.target.length - 1].value;

    switch (btnType) {
      case "Log In":
        console.log("Ini Login");
        break;

      case "Sign Up":
        console.log("Ini Sign Up");
        break;

      default:
        break;
    }
  };

  return (
    <FormStyled isActive={props.getFocus} onSubmit={testing}>
      {props.children}
    </FormStyled>
  );
};

export default Form;
