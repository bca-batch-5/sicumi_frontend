import React from "react";
import { PinWrapper, InputHolder, Input } from "./StyledPin";

const Pin = () => {
  return (
    <PinWrapper>
      <InputHolder>
        <Input type="text" maxLength="1" />
      </InputHolder>
      <InputHolder>
        <Input type="text" maxLength="1" />
      </InputHolder>
      <InputHolder>
        <Input type="text" maxLength="1" />
      </InputHolder>
      <InputHolder>
        <Input type="text" maxLength="1" />
      </InputHolder>
      <InputHolder>
        <Input type="text" maxLength="1" />
      </InputHolder>
      <InputHolder>
        <Input type="text" maxLength="1" />
      </InputHolder>
    </PinWrapper>
  );
};

export default Pin;
