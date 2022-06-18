import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutHome from "../../Layouts/Home/Home";
import { Wrappers, CenterWrapper, Unc, LabelText, MainContent } from "./StyledChangePhone";
import TagInformation from "../../Components/TextBox/TagInformation";
import Button from "../../Components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { updatePhoneAPI } from "../../Services/Users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePhone = () => {
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const updatePhone = async () => {
    const data = {
      phone,
    };

    const res = await updatePhoneAPI(data);
    switch (res.data.status) {
      case 200:
        toast.success(res.data.message, {
          position: "top-center",
        });
        setTimeout(() => navigate("/managephone"), 5000);
        break;

      default:
        toast.warning(res.data.message, {
          position: "top-center",
        });
        break;
    }

    console.log("data update: ", res.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await updatePhone();
    setPhone("");
  };
  return (
    <LayoutHome>
      <MainContent>
        <Wrappers>
          <TagInformation Title="Add Phone Number" Desc="Add at least one phone number for the transfer ID so you can start transfering your money to another user." />
        </Wrappers>
        <br />
        <br />
        <CenterWrapper>
          <LabelText>
            <FontAwesomeIcon icon={faPhone} style={{ paddingRight: 10 }}></FontAwesomeIcon>
            +62
            <Unc type="type" placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)} maxLength="13" value={phone}></Unc>
          </LabelText>
          <br />
          <br />
          <br />
          <br />
          <Button Name="Change Phone Number" onclick={onSubmit} />

          <ToastContainer />
        </CenterWrapper>
        <br />
        <br />
        <br />
      </MainContent>
    </LayoutHome>
  );
};

export default ChangePhone;
