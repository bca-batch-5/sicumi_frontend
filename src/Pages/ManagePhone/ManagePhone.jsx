import React, { useState, useEffect } from "react";
import LayoutHome from "../../Layouts/Home/Home";
import { Link } from "react-router-dom";
import { Wrappers, DeletePhone, Title, Desc, Mwrapper } from "./StyledManagePhone";
import TagInformation from "../../Components/TextBox/TagInformation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getUserByIdAPI } from "../../Services/Users";
import { MainContent } from "../ChangePhone/StyledChangePhone";

const ManagePhone = () => {
  const [phone, setPhone] = useState("");

  const getUserById = async (e) => {
    const res = await getUserByIdAPI();
    console.log("res get by id: ", res);
    setPhone(res.data.phone);
  };
  useEffect(() => {
    getUserById();
  }, []);

  return (
    <LayoutHome>
      <MainContent>
        <Wrappers>
          <TagInformation Title="Manage Phone" Desc="You can only delete the phone number and then you must add another phone number." />
        </Wrappers>
        <br />

        <DeletePhone>
          <Mwrapper>
            <Title>Primary</Title>
            <Desc>{phone}</Desc>
          </Mwrapper>
          <Link to="/changephone" style={{ textDecoration: "none", paddingRight: 50, paddingTop: 15, fontSize: 15 }}>
            <FontAwesomeIcon icon={faTrash} style={{ paddingRight: 10 }} />
          </Link>
        </DeletePhone>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </MainContent>
    </LayoutHome>
  );
};

export default ManagePhone;
