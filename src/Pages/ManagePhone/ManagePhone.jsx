import React from "react";
import LayoutHome from "../../Layouts/Home/Home";
import { Link } from "react-router-dom";
import { Wrappers, DeletePhone, Title, Desc, Mwrapper } from "./StyledManagePhone";
import TagInformation from "../../Components/TextBox/TagInformation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ManagePhone = () => {
  return (
    <LayoutHome>
      <Wrappers>
        <TagInformation Title="Manage Phone" Desc="You can only delete the phone number and then you must add another phone number." />
      </Wrappers>
      <br />

      <DeletePhone>
        <Mwrapper>
          <Title>Primary</Title>
          <Desc>+62 813-9387-7946</Desc>
        </Mwrapper>

        <Link to="/changephone" style={{ textDecoration: "none", paddingRight: 50, paddingTop: 15, fontSize: 15 }}>
          <FontAwesomeIcon icon={faTrash} style={{ paddingRight: 10 }} />
        </Link>
      </DeletePhone>
    </LayoutHome>
  );
};

export default ManagePhone;
