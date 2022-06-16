import React from "react";
import { Wrapper, Title, Desc } from "../TextBox/StyleDetailsInformation";

const DetailsInformation = (props) => {
  return (
    <Wrapper>
      <Title>{props.Title}</Title>
      <Desc>{props.Desc}</Desc>
    </Wrapper>
  );
};

export default DetailsInformation;
