import React from "react";
import FormStyled from "../styled/FormStyled";

const Form = (props) => {
  const testing = (e) => {
    e.preventDefault();

    const btnId = e.target[e.target.length - 1].id;

    console.log(btnId);
    switch (btnId) {
      case "signin":
        console.log("Ini Login");
        break;

      case "signup":
        console.log("Ini Sign Up");
        break;

      case "signpin":
        console.log("Ini Sign Pin");
        break;

      case "checkmail":
        console.log("Ini Check Mail");

        break;
      case "reset":
        console.log("Ini Reset Password");
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
