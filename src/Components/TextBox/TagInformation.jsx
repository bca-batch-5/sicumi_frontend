import React from "react";
import { Wrapper, Title, Desc } from "../TextBox/StyleTagInformation";

const TagInformation = (props) => {
  return (
    <Wrapper>
      <Title>{props.Title}</Title>
      <Desc>{props.Desc}</Desc>
    </Wrapper>
  );
};

export default TagInformation;
