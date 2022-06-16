import React from "react";
import { PinWrapper, InputHolder, Input } from "./StyledPin";

const Pin = () => {
  const NumericOnly = (e) => {
    const reg = /^[0-9\b]+$/;
    let preval = e.target.value;
    if (e.target.value === "" || reg.test(e.target.value)) return true;
    else e.target.value = preval.substring(0, preval.length - 1);
  };
  return (
    <PinWrapper>
      <InputHolder>
        <Input type="text" maxLength="1" onChange={NumericOnly} />
      </InputHolder>
      <InputHolder>
        <Input type="text" maxLength="1" onChange={NumericOnly} />
      </InputHolder>
      <InputHolder>
        <Input type="text" maxLength="1" onChange={NumericOnly} />
      </InputHolder>
      <InputHolder>
        <Input type="text" maxLength="1" onChange={NumericOnly} />
      </InputHolder>
      <InputHolder>
        <Input type="text" maxLength="1" onChange={NumericOnly} />
      </InputHolder>
      <InputHolder>
        <Input type="text" maxLength="1" onChange={NumericOnly} />
      </InputHolder>
    </PinWrapper>
  );
};

export default Pin;
