import React from "react";
import { Link } from "react-router-dom";
import Search from "../../Components/Form/Search";
import ContactInformation from "../../Components/TextBox/ContactInformation";
import LayoutHome from "../../Layouts/Home/Home";
import { MainContent, TitleContact, YWrapp } from "./StyleContact";

const Contact = () => {
  return (
    <LayoutHome>
      <MainContent>
          <TitleContact> Search Receiver by Friend List
</TitleContact>
<Search />
        <YWrapp>
            <Link to="/Transfer" style={{textDecoration : `none`}}>
            <ContactInformation Title="Robert JR" Desc="+62563738237328">
            {" "}
          </ContactInformation>
            </Link>
            <Link to="" style={{textDecoration : `none`}}>
            <ContactInformation Title="Robert JR" Desc="+62563738237328">
            {" "}
          </ContactInformation>
            </Link>
            <Link to="" style={{textDecoration : `none`}}>
            <ContactInformation Title="Robert JR" Desc="+62563738237328">
            {" "}
          </ContactInformation>
            </Link>
            <Link to="" style={{textDecoration : `none`}}>
            <ContactInformation Title="Robert JR" Desc="+62563738237328">
            {" "}
          </ContactInformation>
            </Link>
        </YWrapp>
      </MainContent>
    </LayoutHome>
  );
};

export default Contact;
