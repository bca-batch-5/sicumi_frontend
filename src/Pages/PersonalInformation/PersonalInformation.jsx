import React from "react";
import LayoutHome from "../../Layouts/Home/Home";
import { Link } from "react-router-dom";
import { Wrappers, Manage, Title, Desc, Mwrapper, CenterWrapper } from "./StyledPersonalInfomartion";
import TagInformation from "../../Components/TextBox/TagInformation";
import Button from "../../Components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const PersonalInformation = () => {
  return (
    <LayoutHome>
      <Wrappers>
        <TagInformation Title="Personal Information" Desc="We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support." />
      </Wrappers>
      <Manage>
        <Mwrapper>
          <Title>
            First Name
            <FontAwesomeIcon icon={faPencil} style={{ paddingLeft: 10 }}></FontAwesomeIcon>
          </Title>
          <Desc contentEditable="true">Robert</Desc>
        </Mwrapper>
      </Manage>
      <Manage>
        <Mwrapper>
          <Title>
            Last Name<FontAwesomeIcon icon={faPencil} style={{ paddingLeft: 10 }}></FontAwesomeIcon>
          </Title>
          <Desc contentEditable="true">Chandler</Desc>
        </Mwrapper>
      </Manage>
      <Manage>
        <Mwrapper>
          <Title>
            Email
            <FontAwesomeIcon icon={faPencil} style={{ paddingLeft: 10 }}></FontAwesomeIcon>
          </Title>
          <Desc contentEditable="true">Robert@mail.com</Desc>
        </Mwrapper>
      </Manage>
      <Manage>
        <Mwrapper>
          <Title>Phone Number</Title>
          <Desc>+62 813-9387-7946</Desc>
        </Mwrapper>
        <Link to="/managephone" style={{ textDecoration: "none", paddingRight: 50, paddingTop: 15, fontSize: 14 }}>
          Manage
        </Link>
      </Manage>
      <CenterWrapper>
        <Button Name="Save" />
      </CenterWrapper>
    </LayoutHome>
  );
};

export default PersonalInformation;
