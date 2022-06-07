import React from "react";
import Intro from "../components/Intro";
import SideHero from "../layouts/SideHero";
import ContainerStyled from "../styled/ContainerStyled";
import MainHeroStyled from "../styled/MainHeroStyled";

const RegisSucPage = () => {
  return (
    <ContainerStyled>
      <SideHero />
      <MainHeroStyled>
        <img
          className="icon__success"
          src={require("../assets/success.png")}
          alt="success registration"
        />
        <Intro
          titleProps="Your PIN Was Successfully Created"
          subProps="Your PIN was successfully created and you can now access all the features in Sicumi. Login to your new account and start exploring, you'll moving to login page in 5 seconds!"
        />
      </MainHeroStyled>
    </ContainerStyled>
  );
};

export default RegisSucPage;
