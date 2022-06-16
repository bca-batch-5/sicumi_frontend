import React, { useState } from "react";
import Form from "../../Components/Form";
import Intro from "../../Components/Intro";
import SideHero from "../../Layouts/SideHero";
import ContainerStyled from "../../Styled/ContainerStyled";
import InputStyled from "../../Styled/InputStyled";
import MainHeroStyled from "../../Styled/MainHeroStyled";
import { ReactComponent as EmailSvg } from "../../Images/email.svg";
import { ReactComponent as PassSvg } from "../../Images/password.svg";
import { ReactComponent as VisibleSvg } from "../../Images/visible.svg";
import { ReactComponent as NotVisibleSvg } from "../../Images/notvisible.svg";
import BtnAllStyled from "../../Styled/BtnAllStyled";
import InputBox from "../../Components/InputBox";
import { Link } from "react-router-dom";

const LoginPage = () => {
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
          titleProps="start accessing banking needs with all devices and all platforms with 30.000+ Users"
          subProps="Transfering money is easier than ever, you can access Sicumi wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
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

          <div className="reset__pass">
            <Link to={"/reset"}> Forgot Password?</Link>
          </div>
          <div className="alert">{mesAlert}</div>
          <BtnAllStyled type="submit" id="signin" value="Log In" />
        </Form>
        <div className="cta">
          Don't have an account? Let's
          <span className="highlight">
            <Link to={"/regis"}> Sign Up</Link>
          </span>
        </div>
      </MainHeroStyled>
    </ContainerStyled>
  );
};

export default LoginPage;
