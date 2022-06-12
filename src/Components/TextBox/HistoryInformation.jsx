import React from "react";
import profilepict from "../../Images/profilepict.jpg";
import { Amount, Desc, Title, Wrapper, Wrapperdetails,MainWrapper } from "./StyleHistoryInformation";

const HistoryInformation = (props) => {
  return (
      <Wrapper>
    <MainWrapper>
      <img src={profilepict} alt="none" width={50} style={{ borderRadius: `10px` }} />
      <Wrapperdetails>
        <Title>{props.Title}</Title>
        <Desc>{props.Desc}</Desc>
      </Wrapperdetails>
    </MainWrapper>
    <Amount> {props.Amount}</Amount>
    </Wrapper>
  );
};

export default HistoryInformation;