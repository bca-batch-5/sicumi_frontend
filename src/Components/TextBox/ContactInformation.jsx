import React, { useEffect, useState } from "react";
import { getUserId } from "../../Config/FetchAxios";
import profilepict from "../../Images/profilepict.jpg";
import { Wrapperdetails, Wrapper, Title, Desc } from "./StyleContactInformation";

const ContactInformation = (props) => {
    const {photo, subTitle, subDesc, userId} = props;
    const [display, setDisplay] = useState("block");
  
    function moveToLocal(){
      localStorage.setItem("userId", userId);
    }
      useEffect(() => {
        checkDisplay();
      }, [])
      
      function checkDisplay(){
        if (userId === getUserId()) {
          setDisplay("none")
    
      }
    }
  
  
  
  return (
    <Wrapper onClick={moveToLocal} style={{display:"flex"}} >
      <img src={profilepict} alt="none" width={50} style={{ borderRadius: `10px` }} />
      <Wrapperdetails>
        <Title>{subTitle}</Title>
        <Desc>{subDesc}</Desc>
      </Wrapperdetails>
    </Wrapper>
  );
};

export default ContactInformation;
