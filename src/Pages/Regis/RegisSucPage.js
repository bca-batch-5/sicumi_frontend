import React from "react";
import Intro from "../../Components/Intro";
import SideHero from "../../Layouts/SideHero";
import ContainerStyled from "../../Styled/ContainerStyled";
import MainHeroStyled from "../../Styled/MainHeroStyled";

const RegisSucPage = () => {
  return (
    <ContainerStyled>
      <SideHero />
      <MainHeroStyled>
        <img
          className="icon__success"
          src={require("../../Images/success.png")}
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
