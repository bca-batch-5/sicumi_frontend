import React, { useState } from "react";
import LayoutHome from "../../Layouts/Home/Home";
import { Wrappers, CenterWrapper, PinWrapper, InputHolder, Input } from "./StyledChangePin";
import TagInformation from "../../Components/TextBox/TagInformation";
import Button from "../../Components/Button/Button";
import { updatePinAPI } from "../../Services/Users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ChangePin = () => {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");

  const navigate = useNavigate();

  const updatePin = async () => {
    const data = {
      pin1,
      pin2,
      pin3,
      pin4,
      pin5,
      pin6,
    };

    const res = await updatePinAPI(data);
    switch (res.data.status) {
      case 200:
        toast.success(res.data.message, {
          position: "top-center",
        });
        const timer = setTimeout(() => navigate("/profile"), 5000);
        break;

      default:
        toast.warning(res.data.message, {
          position: "top-center",
        });
        break;
    }

    console.log("data update: ", res);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await updatePin();
    setPin1("");
    setPin2("");
    setPin3("");
    setPin4("");
    setPin5("");
    setPin6("");
  };
  return (
    <LayoutHome>
      <Wrappers>
        <TagInformation Title="Change PIN" Desc="Enter your current 6 digits Sicumi PIN below to continue to the next steps." />
      </Wrappers>
      <br />
      <br />
      <CenterWrapper>
        <PinWrapper>
          <InputHolder>
            <Input type="number" min="0" onChange={(e) => setPin1(e.target.value)} value={pin1} />
          </InputHolder>
          <InputHolder>
            <Input type="number" min="0" maxLength="1" onChange={(e) => setPin2(e.target.value)} value={pin2} />
          </InputHolder>
          <InputHolder>
            <Input type="number" min="0" maxLength="1" onChange={(e) => setPin3(e.target.value)} value={pin3} />
          </InputHolder>
          <InputHolder>
            <Input type="number" min="0" maxLength="1" onChange={(e) => setPin4(e.target.value)} value={pin4} />
          </InputHolder>
          <InputHolder>
            <Input type="number" min="0" maxLength="1" onChange={(e) => setPin5(e.target.value)} value={pin5} />
          </InputHolder>
          <InputHolder>
            <Input type="number" min="0" maxLength="1" onChange={(e) => setPin6(e.target.value)} value={pin6} />
          </InputHolder>
        </PinWrapper>
        <br />
        <br />
        <br />
        <CenterWrapper>
          <Button Name="Change PIN" onclick={onSubmit} />
        </CenterWrapper>
      </CenterWrapper>
      <ToastContainer />
    </LayoutHome>
  );
};

export default ChangePin;
