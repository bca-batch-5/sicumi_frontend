import squid from "../../Images/squid.png";
import profilepict from "../../Images/profilepict.jpg";
import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, SectionRight, DescAcc, Nav, NavLeft, SectionLeft, Main, Footer, RightFooter, LeftFooter, NavRight, NavContainer, Hlogo, NameAcc, PhoneAcc, ListMenu, List } from "./StyleHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faArrowUp, faBell, faChartColumn, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import DetailsInformation from "../../Components/TextBox/DetailsInformation";
import ContactInformation from "../../Components/TextBox/ContactInformation";
const LayoutHome = (props) => {
  const { children } = props;
  return (
    <Wrapper>
      <Nav>
        <NavContainer>
          <NavLeft>
            <img src={squid} alt="none" width={70} />
            <Hlogo> Sicumi</Hlogo>
          </NavLeft>
          <NavRight>
            <Link to="" style={{ textDecoration: "none" }}>
              <img src={profilepict} alt="none" width={50} style={{ borderRadius: `10px` }} />
            </Link>

            <DescAcc>
              <Link to="" style={{ textDecoration: "none" }}>
                <NameAcc> Robert Chandler</NameAcc>
                <PhoneAcc> +62 8139 3877 7946</PhoneAcc>
              </Link>
            </DescAcc>
            <FontAwesomeIcon icon={faBell} style={{ fontSize: `18px` }}></FontAwesomeIcon>
          </NavRight>
        </NavContainer>
      </Nav>
      <Main>
        <SectionLeft>
          <ListMenu>
            <ul>
              <List>
                <Link to="" style={{ textDecoration: "none" }}>
                  <FontAwesomeIcon icon={faChartColumn}></FontAwesomeIcon> Dashboard
                </Link>
              </List>
              <br />
              <List>
                <Link to="" style={{ textDecoration: "none" }}>
                  <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                  Transfer
                </Link>
              </List>
              <br />
              <List>
                <Link to="" style={{ textDecoration: "none" }}>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                  Top-Up
                </Link>
              </List>
              <br />
              <List>
                <Link to="" style={{ textDecoration: "none" }}>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  Profile
                </Link>
              </List>
              <br />
              <br />
              <br />
              <br />
              <br />
              <List>
                <Link to="" style={{ textDecoration: "none" }}>
                  <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
                  Log out
                </Link>
              </List>
            </ul>
          </ListMenu>
        </SectionLeft>
        <SectionRight>
          <DetailsInformation Title="Amount" Desc="100k" />
          <ContactInformation Title="era" Desc="numb02282882" />
          {children}
        </SectionRight>
      </Main>
      <Footer>
        <LeftFooter>2020 Sicumi. All right reserved.</LeftFooter>
        <RightFooter>
          <p>+62 5637 8882 9901</p>
          <p>contact@sicumi.com</p>
        </RightFooter>
      </Footer>
    </Wrapper>
  );
};

export default LayoutHome;
