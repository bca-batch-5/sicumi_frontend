import React, { useState } from "react";
import InputBoxPinStyled from "../styled/InputBoxPinStyled";

const InputBoxPin = (props) => {
  const [formFocus, setFormFocus] = useState(true);
  const setFocus = () => {
    setFormFocus(!formFocus);
    props.getFocus(formFocus);
  };
  return (
    <InputBoxPinStyled
      type="text"
      maxLength={1}
      onFocus={setFocus}
      onBlur={setFocus}
    />
  );
};

export default InputBoxPin;
