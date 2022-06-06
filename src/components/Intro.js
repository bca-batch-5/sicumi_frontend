import React from "react";
import IntroStyled from "../styled/IntroStyled";

const Intro = (props) => {
  return (
    <IntroStyled>
      <p className="intro__title">{props.titleProps}</p>
      <p className="intro__sub">{props.subProps}</p>
    </IntroStyled>
  );
};

export default Intro;
