import React, { useState } from "react";
import Form from "../components/Form";
import Intro from "../components/Intro";
import SideHero from "../layouts/SideHero";
import ContainerStyled from "../styled/ContainerStyled";
import InputStyled from "../styled/InputStyled";
import MainHeroStyled from "../styled/MainHeroStyled";
import { ReactComponent as EmailSvg } from "../assets/email.svg";
import { ReactComponent as PassSvg } from "../assets/password.svg";
import { ReactComponent as VisibleSvg } from "../assets/visible.svg";
import { ReactComponent as NotVisibleSvg } from "../assets/notvisible.svg";
import BtnAllStyled from "../styled/BtnAllStyled";
import InputBox from "../components/InputBox";

const LoginPage = () => {
  const [visible, setVisible] = useState(false);
  const [formFocus, setFormFocus] = useState(false);

  const visibility = () => {
    setVisible(!visible);
  };

  const getFocusHandler = (focusData) => {
    setFormFocus(focusData ? true : false);
  };
  console.log(formFocus);
  return (
    <ContainerStyled>
      <SideHero />
      <MainHeroStyled>
        <Intro
          titleProps="start accessing banking needs with all devices and all platforms with 30.000+ Users"
          subProps="Transfering money is easier than ever, you can access Sicumi wherever you are. Desktop, latop, mobile phone? we cover all of that for you!"
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

          <div className="reset__pass">Forgot Password?</div>
          <div className="alert">Email or Password Invalid</div>
          <BtnAllStyled type="button" value="Login" />
        </Form>
        <div className="cta">
          Don't have an account? Let's
          <span className="highlight"> Sign Up</span>
        </div>
      </MainHeroStyled>
    </ContainerStyled>
  );
};

export default LoginPage;
