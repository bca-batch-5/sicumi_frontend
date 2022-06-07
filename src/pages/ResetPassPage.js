import React, { useState } from "react";
import Form from "../components/Form";
import Intro from "../components/Intro";
import SideHero from "../layouts/SideHero";
import ContainerStyled from "../styled/ContainerStyled";
import InputStyled from "../styled/InputStyled";
import MainHeroStyled from "../styled/MainHeroStyled";
import { ReactComponent as PassSvg } from "../assets/password.svg";
import { ReactComponent as VisibleSvg } from "../assets/visible.svg";
import { ReactComponent as NotVisibleSvg } from "../assets/notvisible.svg";
import BtnAllStyled from "../styled/BtnAllStyled";
import InputBox from "../components/InputBox";

const ResetPassPage = () => {
  const [visible, setVisible] = useState(false);
  const [formFocus, setFormFocus] = useState(false);

  const visibility = () => {
    setVisible(!visible);
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

        <Form getFocus={formFocus}>
          {/* PASSWORD INPUT */}
          <InputStyled isActive={formFocus}>
            <PassSvg />
            <InputBox
              type={visible ? "text" : "password"}
              placeholder="Enter your password"
              getFocus={getFocusHandler}
            />
            {visible === true ? (
              <NotVisibleSvg onClick={visibility} />
            ) : (
              <VisibleSvg onClick={visibility} />
            )}
          </InputStyled>
          {/* PASSWORD INPUT */}
          <InputStyled isActive={formFocus}>
            <PassSvg />
            <InputBox
              type={visible ? "text" : "password"}
              placeholder="Enter your password"
              getFocus={getFocusHandler}
            />
          </InputStyled>

          <div className="alert">Email or Password Invalid</div>
          <BtnAllStyled type="submit" value="Reset Password" />
        </Form>
      </MainHeroStyled>
    </ContainerStyled>
  );
};

export default ResetPassPage;
