import React, { useState } from "react";
import Form from "../components/Form";
import Intro from "../components/Intro";
import SideHero from "../layouts/SideHero";
import ContainerStyled from "../styled/ContainerStyled";
import InputStyled from "../styled/InputStyled";
import MainHeroStyled from "../styled/MainHeroStyled";
import { ReactComponent as EmailSvg } from "../assets/email.svg";
import { ReactComponent as PassSvg } from "../assets/password.svg";
import { ReactComponent as PersonSvg } from "../assets/person.svg";
import { ReactComponent as VisibleSvg } from "../assets/visible.svg";
import { ReactComponent as NotVisibleSvg } from "../assets/notvisible.svg";
import BtnAllStyled from "../styled/BtnAllStyled";
import InputBox from "../components/InputBox";
import { Link } from "react-router-dom";

const RegisPage = () => {
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
          titleProps="start accessing banking needs with all devices and all platforms with 30.000+ Users"
          subProps="Transfering money is easier than ever, you can access Sicumi wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
        />

        <Form getFocus={formFocus}>
          {/* NAME INPUT */}
          <InputStyled isActive={formFocus}>
            <PersonSvg />
            <InputBox
              type="text"
              placeholder="Enter your name"
              getFocus={getFocusHandler}
            />
          </InputStyled>

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

          <div className="alert">Email or Password Invalid</div>
          <BtnAllStyled type="submit" id="signup" value="Sign Up" />
        </Form>
        <div className="cta">
          Already have an account? Let's
          <span className="highlight">
            <Link to={"/login"}> Log In</Link>
          </span>
        </div>
      </MainHeroStyled>
    </ContainerStyled>
  );
};

export default RegisPage;
