import React, { useState } from "react";
import LayoutHome from "../../Layouts/Home/Home";
import { useNavigate } from "react-router-dom";
import { Wrappers, Manage, Title, Desc, Mwrapper, CenterWrapper, Input } from "./StyledPersonalInfomartion";
import TagInformation from "../../Components/TextBox/TagInformation";
import Button from "../../Components/Button/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateInfoAPI } from "../../Services/Users";
import { MainContent } from "../ChangePhone/StyledChangePhone";

const EditPersonalInformation = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const updateInfo = async () => {
    const data = {
      firstname,
      lastname,
      email,
    };

    const res = await updateInfoAPI(data);
    switch (res.data.status) {
      case 200:
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: "1000",
        });
        const timer = setTimeout(() => navigate("/profile"), 5000);

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

    await updateInfo();
  };

  return (
    <LayoutHome>
      <MainContent>
        <Wrappers>
          <TagInformation Title=" Edit Your Personal Information" Desc="We got your personal information from the sign up proccess.But you could edit your data here" />
        </Wrappers>
        <Manage>
          <Mwrapper>
            <Title>First Name</Title>
            <Desc>
              <Input type="type" placeholder="Enter your first name" onChange={(e) => setFirstName(e.target.value)} value={firstname}></Input>
            </Desc>
          </Mwrapper>
        </Manage>
        <Manage>
          <Mwrapper>
            <Title>Last Name</Title>
            <Desc>
              <Input type="type" placeholder="Enter your last name" onChange={(e) => setLastName(e.target.value)} value={lastname}></Input>
            </Desc>
          </Mwrapper>
        </Manage>
        <Manage>
          <Mwrapper>
            <Title>Email</Title>
            <Desc>
              <Input type="type" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email}></Input>
            </Desc>
          </Mwrapper>
        </Manage>

        <CenterWrapper>
          <Button Name="Save" onclick={onSubmit} />
          <ToastContainer />
        </CenterWrapper>
        <br />
        <br />
      </MainContent>
    </LayoutHome>
  );
};

export default EditPersonalInformation;
