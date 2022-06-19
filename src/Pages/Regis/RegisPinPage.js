import React, { useState } from "react";
import Form from "../../Components/Form";
import Intro from "../../Components/Intro";
import SideHero from "../../Layouts/SideHero";
import ContainerStyled from "../../Styled/ContainerStyled";
import MainHeroStyled from "../../Styled/MainHeroStyled";
import BtnAllStyled from "../../Styled/BtnAllStyled";
import InputPinStyled from "../../Styled/InputPinStyled";
import InputBoxPin from "../../Components/InputBoxPin";

const RegisPinPage = () => {
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
          titleProps="Secure Your Account, Your Wallet, And Your Data With 6 Digits PIN That You Created Yourself"
          subProps="Create 6 digits pin to secure all your money and your data in Sicumi app. Keep it secret and don't tell anyone about your Sicumi account password and the PIN."
        />

        <Form getFocus={formFocus} setAlert={alertFunc} alertStatus={curAlert}>
          <InputPinStyled isActive={formFocus}>
            <InputBoxPin getFocus={getFocusHandler} />
            <InputBoxPin getFocus={getFocusHandler} />
            <InputBoxPin getFocus={getFocusHandler} />
            <InputBoxPin getFocus={getFocusHandler} />
            <InputBoxPin getFocus={getFocusHandler} />
            <InputBoxPin getFocus={getFocusHandler} />
          </InputPinStyled>

          <div className="alert">{mesAlert}</div>
          <BtnAllStyled type="submit" id="signpin" value="Confirm" />
        </Form>
      </MainHeroStyled>
    </ContainerStyled>
  );
};

export default RegisPinPage;
