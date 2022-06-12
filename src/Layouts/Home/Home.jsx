import squid from "../../Images/squid.png";
import profilepict from "../../Images/profilepict.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  SectionRight,
  DescAcc,
  Nav,
  NavLeft,
  SectionLeft,
  Main,
  Footer,
  RightFooter,
  LeftFooter,
  NavRight,
  NavContainer,
  Hlogo,
  NameAcc,
  PhoneAcc,
  ListMenu,
  List,
  Dropdown,
  ListLogOut,
} from "./StyleHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faArrowUp,
  faBell,
  faChartColumn,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ModalNotif from "../../Components/Modal/ModalNotif";
const LayoutHome = (props) => {
  const { children } = props;

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      {modalOpen && <ModalNotif setOpenModal={setModalOpen} />}
      <Wrapper>
        <Nav>
          <NavContainer>
            <NavLeft>
              <img src={squid} alt="none" width={70} />
              <Hlogo> Sicumi</Hlogo>
            </NavLeft>
            <NavRight>
              <Link to="" style={{ textDecoration: "none" }}>
                <img
                  src={profilepict}
                  alt="none"
                  width={50}
                  style={{ borderRadius: `10px`, alignItems: `center` }}
                />
              </Link>

              <DescAcc>
                <Link to="" style={{ textDecoration: "none" }}>
                  <NameAcc> Robert Chandler</NameAcc>
                  <PhoneAcc> +62 8139 3877 7946</PhoneAcc>
                </Link>
              </DescAcc>
              <Dropdown>
                <Link
                  to=""
                  onClick={() => {
                    setModalOpen(true);
                  }}
                  style={{ textDecoration: `none` }}
                >
                  <FontAwesomeIcon
                    icon={faBell}
                    style={{
                      fontSize: `18px`,
                      marginLeft: 5,
                      color: `#7950f2`,
                    }}
                  ></FontAwesomeIcon>
                </Link>
              </Dropdown>
            </NavRight>
          </NavContainer>
        </Nav>
        <Main>
          <SectionLeft>
            <ListMenu>
              <ul style={{ paddingInlineStart: 0 }}>
                <List>
                  <Link to="/Dashboard" style={{ textDecoration: "none" }}>
                    <FontAwesomeIcon
                      icon={faChartColumn}
                      style={{ paddingRight: 10 }}
                    ></FontAwesomeIcon>{" "}
                    Dashboard
                  </Link>
                </List>
                <br />
                <List>
                  <Link to="/Contact" style={{ textDecoration: "none" }}>
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      style={{ paddingRight: 10 }}
                    ></FontAwesomeIcon>
                    Transfer
                  </Link>
                </List>
                <br />
                <List>
                  <Link to="/TopUp" style={{ textDecoration: "none" }}>
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ paddingRight: 10 }}
                    ></FontAwesomeIcon>
                    Top-Up
                  </Link>
                </List>
                <br />
                <List>
                  <Link to="/Profile" style={{ textDecoration: "none" }}>
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ paddingRight: 10 }}
                    ></FontAwesomeIcon>
                    Profile
                  </Link>
                </List>
              </ul>
              </ListMenu>

              <ListLogOut>
                <Link to="" style={{ textDecoration: "none" }}>
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    style={{ paddingRight: 10 }}
                  ></FontAwesomeIcon>
                  Log out
                </Link>
              </ListLogOut>
            
          </SectionLeft>
          <SectionRight>{children}</SectionRight>
        </Main>
        <Footer>
          <LeftFooter>2020 Sicumi. All right reserved.</LeftFooter>
          <RightFooter>
            <p>+62 5637 8882 9901</p>
            <p>contact@sicumi.com</p>
          </RightFooter>
        </Footer>
      </Wrapper>
    </>
  );
};

export default LayoutHome;
