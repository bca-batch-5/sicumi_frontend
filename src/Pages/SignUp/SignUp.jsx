import React from "react";
import Button from "../../Components/Button/Button";
import InputEmail from "../../Components/Form/InputEmail";
import InputPass from "../../Components/Form/InputPass";
import TagInformation from "../../Components/TextBox/TagInformation";
import { Forgot, QTag } from "./StyledSignUp";
import { Link } from "react-router-dom";
import InputUn from "../../Components/Form/InputUn";
import LayoutHome from "../../Layouts/Home/Home";

const SignUp = () => {
  return (
    <LayoutHome>
      <TagInformation
        Title="Start Accessing Banking Needs
With All Devices and All Platforms
With 30.000+ Users"
        Desc="Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
      />
      <InputUn />
      <br></br>
      <InputEmail />
      <br></br>
      <InputPass Placeholder="Enter your password" />
      <br></br>
      <br></br>
      <br></br>
      <Button Name="Sign Up" />
      <br></br>
      <QTag>
        Already have an account? Let’s{" "}
        <Link to="/Signin">
          <Forgot>Sign In</Forgot>
        </Link>
      </QTag>
    </LayoutHome>
  );
};

export default SignUp;
