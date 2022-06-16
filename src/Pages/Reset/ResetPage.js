import React, { useState } from "react";
import Form from "../../Components/Form";
import Intro from "../../Components/Intro";
import SideHero from "../../Layouts/SideHero";
import ContainerStyled from "../../Styled/ContainerStyled";
import InputStyled from "../../Styled/InputStyled";
import MainHeroStyled from "../../Styled/MainHeroStyled";
import { ReactComponent as EmailSvg } from "../../Images/email.svg";
import BtnAllStyled from "../../Styled/BtnAllStyled";
import InputBox from "../../Components/InputBox";

const ResetPage = () => {
  const [formFocus, setFormFocus] = useState(false);

  const [curAlert, setCurAlert] = useState(false);
  const [mesAlert, setMesAlert] = useState("testing");

  const alertFunc = (message) => {
    setCurAlert(true);
    setMesAlert(message);

    setTimeout(() => {
      setCurAlert(false);
    }, 3000);
  };

  const getFocusHandler = (focusData) => {
    setFormFocus(focusData ? true : false);
  };
  return (
    <ContainerStyled>
      <SideHero />
      <MainHeroStyled>
        <Intro
          titleProps="Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In A Minutes."
          subProps="To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens."
        />

        <Form getFocus={formFocus} setAlert={alertFunc} alertStatus={curAlert}>
          {/* EMAIL INPUT */}
          <InputStyled isActive={formFocus}>
            <EmailSvg />
            <InputBox
              type="text"
              placeholder="Enter your e-mail"
              getFocus={getFocusHandler}
            />
          </InputStyled>

          <div className="alert">{mesAlert}</div>
          <BtnAllStyled type="submit" id="checkmail" value="Search" />
        </Form>
      </MainHeroStyled>
    </ContainerStyled>
  );
};

export default ResetPage;
