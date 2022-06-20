import {  faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserId } from "../../Config/FetchAxios";
import { checkPin, createTransferAPI, updateBalanceAPI } from "../../Services/User";
import Pin from "../Pin/Pin";
import { BtnContinue, CloseBtn, ContainerPin, Footer, ModalBackground, ModalContainer, Note, TitleHead, WrapCloseBtn } from "./StyleModalPin";
import "./StyleModalPin.css"




const ModalPin = ({ setOpenModal }) => {
  const [pin, setPin] = useState([]);
  const navigate = useNavigate();

  function getValue(e) {
    if (e.target.value != "") {
      setPin([...pin, e.target.value]);
    }
  }

  const checkPinButton = async () => {
    const data = {
      pin,
    };
  


  const transferAmount = +localStorage.getItem("transactionAmount");

  const transaction ={
    amount : transferAmount,
    notes : localStorage.getItem("notes"),
    receiverId : localStorage.getItem("receiver")
  }

  const res = await checkPin(data);
    console.log("checkpin res", res);
    if (res.data.message == "Pin yang anda masukkan benar") {
      const transfer = await createTransferAPI(transaction);
      console.log(transfer);
      const updateBalance1 = await updateBalanceAPI(getUserId())
      console.log(updateBalance1);
      const updateBalance2 = await updateBalanceAPI(localStorage.getItem("receiver"))
      console.log(updateBalance2);
      navigate("/status")
    }else{
      navigate("/transfer/confirmation/failed")
    }
  };
    return (
          <ModalBackground>
        <ModalContainer>
       
          <WrapCloseBtn>
            <TitleHead>Enter Pin to Transfer</TitleHead>
          <CloseBtn onClick={() => {
                setOpenModal(false);
              }}>
                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
              </CloseBtn>
              </WrapCloseBtn>
          <Note>Enter your 6 digits PIN for confirmation to continue transferring money.</Note>
          <ContainerPin>
            <Pin onInput={getValue}></Pin>
          </ContainerPin>

          <Footer>
          <BtnContinue onClick={checkPinButton}> <Link to="/Status" style={{textDecoration : `none`,color: `#fff`}}> Continue</Link></BtnContinue>
          
          </Footer>
          </ModalContainer>
        
        </ModalBackground>

      
    );
};

export default ModalPin;