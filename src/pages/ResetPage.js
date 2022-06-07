import React, { useState } from "react";
import Form from "../components/Form";
import Intro from "../components/Intro";
import SideHero from "../layouts/SideHero";
import ContainerStyled from "../styled/ContainerStyled";
import InputStyled from "../styled/InputStyled";
import MainHeroStyled from "../styled/MainHeroStyled";
import { ReactComponent as EmailSvg } from "../assets/email.svg";
import BtnAllStyled from "../styled/BtnAllStyled";
import InputBox from "../components/InputBox";

const ResetPage = () => {
  const [formFocus, setFormFocus] = useState(false);

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

        <Form getFocus={formFocus}>
          {/* EMAIL INPUT */}
          <InputStyled isActive={formFocus}>
            <EmailSvg />
            <InputBox
              type="text"
              placeholder="Enter your e-mail"
              getFocus={getFocusHandler}
            />
          </InputStyled>

          <div className="alert">Email or Password Invalid</div>
          <BtnAllStyled type="submit" value="Search" />
        </Form>
      </MainHeroStyled>
    </ContainerStyled>
  );
};

export default ResetPage;
