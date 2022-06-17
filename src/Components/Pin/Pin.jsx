import React from "react";
import { PinWrapper, InputHolder, Input } from "./StyledPin";

const Pin = (props) => {
  // const NumericOnly = (e) => {
  //   const reg = /^[0-9\b]+$/;
  //   let preval = e.target.value;
  //   if (e.target.value === "" || reg.test(e.target.value)) return true;
  //   else e.target.value = preval.substring(0, preval.length - 1);
  // };
  return (
    <PinWrapper>
      <InputHolder>
        <Input type="text" maxLength="1" onChange={props.onchange1} value={props.pin1} />
      </InputHolder>
      <InputHolder>
        <Input type="text" maxLength="1" onChange={props.onchange2} value={props.pin2} />
      </InputHolder>
      <InputHolder>
        <Input type="text" maxLength="1" onChange={props.onchange3} value={props.pin3} />
      </InputHolder>
      <InputHolder>
        <Input type="text" maxLength="1" onChange={props.onchange4} value={props.pin4} />
      </InputHolder>
      <InputHolder>
        <Input type="text" maxLength="1" onChange={props.onchange5} value={props.pin5} />
      </InputHolder>
      <InputHolder>
        <Input type="text" maxLength="1" onChange={props.onchange6} value={props.pin6} />
      </InputHolder>
    </PinWrapper>
  );
};

export default Pin;
