import React, { useState, useEffect } from "react";
import LayoutHome from "../../Layouts/Home/Home";
import { Link } from "react-router-dom";

import { Wrappers, Manage, Title, Desc, Mwrapper, CenterWrapper } from "./StyledPersonalInfomartion";
import TagInformation from "../../Components/TextBox/TagInformation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

import "react-toastify/dist/ReactToastify.css";
import { getUserByIdAPI } from "../../Services/Users";
import { MainContent } from "../ChangePhone/StyledChangePhone";

const PersonalInformation = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // const navigate = useNavigate();

  const getUserById = async (e) => {
    const res = await getUserByIdAPI();
    console.log("res get by id: ", res);
    setPhone(res.data.phone);
    setEmail(res.data.email);
    setfirstname(res.data.firstname);
    setLastName(res.data.lastname);
  };
  useEffect(() => {
    getUserById();
  }, []);
  return (
    <LayoutHome>
      <MainContent>
        <Wrappers>
          <TagInformation Title="Personal Information" Desc="We got your personal information from the sign up proccess. If you want to make changes on your information, you can click 'edit'" />
        </Wrappers>
        <section style={{ margin: 10 }}>
          <FontAwesomeIcon icon={faPencil} style={{ paddingRight: 10 }}></FontAwesomeIcon>
          <Link to="/edit" style={{ textDecoration: "none", paddingRight: 50, paddingTop: 15, fontSize: 14 }}>
            Edit
          </Link>
        </section>

        <Manage>
          <Mwrapper>
            <Title>First Name</Title>
            <Desc onChange={(e) => setfirstname(e.target.value)}>{firstname}</Desc>
          </Mwrapper>
        </Manage>
        <Manage>
          <Mwrapper>
            <Title>Last Name</Title>
            <Desc onChange={(e) => setLastName(e.target.value)}>{lastname}</Desc>
          </Mwrapper>
        </Manage>
        <Manage>
          <Mwrapper>
            <Title>Email</Title>
            <Desc type="email" onChange={(e) => setEmail(e.target.value)}>
              {email}
            </Desc>
          </Mwrapper>
        </Manage>
        <Manage>
          <Mwrapper>
            <Title>Phone Number</Title>
            <Desc>{phone}</Desc>
          </Mwrapper>
          <Link to="/managephone" style={{ textDecoration: "none", paddingRight: 50, paddingTop: 15, fontSize: 14 }}>
            Manage
          </Link>
        </Manage>
      </MainContent>
    </LayoutHome>
  );
};

export default PersonalInformation;
