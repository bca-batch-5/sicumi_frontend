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

  const [curAlert, setCurAlert] = useState(false);
  const [mesAlert, setMesAlert] = useState("testing");

  const alertFunc = (message) => {
    setCurAlert(true);
    setMesAlert(message);

    setTimeout(() => {
      setCurAlert(false);
    }, 3000);
  };

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
          subProps="Now you can create a new password for your Sicumi account. Type your new password twice so we can confirm your new password."
        />

        <Form getFocus={formFocus} setAlert={alertFunc} alertStatus={curAlert}>
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

          <div className="alert">{mesAlert}</div>
          <BtnAllStyled type="submit" id="reset" value="Reset Password" />
        </Form>
      </MainHeroStyled>
    </ContainerStyled>
  );
};

export default ResetPassPage;
