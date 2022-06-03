import React from "react";
import profilepict from "../../Images/profilepict.jpg";
import { Wrapperdetails, Wrapper, Title, Desc } from "./StyleContactInformation";

const ContactInformation = (props) => {
  return (
    <Wrapper>
      <img src={profilepict} alt="none" width={50} style={{ borderRadius: `10px` }} />
      <Wrapperdetails>
        <Title>{props.Title}</Title>
        <Desc>{props.Desc}</Desc>
      </Wrapperdetails>
    </Wrapper>
  );
};

export default ContactInformation;
