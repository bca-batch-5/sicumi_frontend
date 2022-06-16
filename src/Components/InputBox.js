import React, { useState } from "react";
import InputBoxStyled from "../Styled/InputBoxStyled";

const InputBox = (props) => {
  const [formFocus, setFormFocus] = useState(true);
  const setFocus = () => {
    setFormFocus(!formFocus);
    props.getFocus(formFocus);
  };
  return (
    <InputBoxStyled
      type={props.type}
      placeholder={props.placeholder}
      onFocus={setFocus}
      onBlur={setFocus}
    />
  );
};

export default InputBox;
