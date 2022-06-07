import React, { useState } from "react";
import Form from "../components/Form";
import Intro from "../components/Intro";
import SideHero from "../layouts/SideHero";
import ContainerStyled from "../styled/ContainerStyled";
import MainHeroStyled from "../styled/MainHeroStyled";
import BtnAllStyled from "../styled/BtnAllStyled";
import InputPinStyled from "../styled/InputPinStyled";
import InputBoxPin from "../components/InputBoxPin";

const RegisPinPage = () => {
  const [formFocus, setFormFocus] = useState(false);

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

        <Form getFocus={formFocus}>
          <InputPinStyled isActive={formFocus}>
            <InputBoxPin getFocus={getFocusHandler} />
            <InputBoxPin getFocus={getFocusHandler} />
            <InputBoxPin getFocus={getFocusHandler} />
            <InputBoxPin getFocus={getFocusHandler} />
            <InputBoxPin getFocus={getFocusHandler} />
            <InputBoxPin getFocus={getFocusHandler} />
          </InputPinStyled>

          <BtnAllStyled type="submit" value="Confirm" />
        </Form>
      </MainHeroStyled>
    </ContainerStyled>
  );
};

export default RegisPinPage;
