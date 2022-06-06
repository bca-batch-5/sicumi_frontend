import React from "react";
import FormStyled from "../styled/FormStyled";

const Form = (props) => {
  return <FormStyled isActive={props.getFocus}>{props.children}</FormStyled>;
};

export default Form;
