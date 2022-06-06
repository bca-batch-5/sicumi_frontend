import React from "react";
import { Bbutton } from "./StyledButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ButtonwArrow = (props) => {
  return (
    <Bbutton type="submit">
      {props.Name} <FontAwesomeIcon icon={faArrowRight} style={{ paddingBlockEnd: 0 }} />
    </Bbutton>
  );
};

export default ButtonwArrow;
