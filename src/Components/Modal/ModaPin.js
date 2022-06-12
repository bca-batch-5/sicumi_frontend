import {  faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Pin from "../Pin/Pin";
import { BtnContinue, CloseBtn, ContainerPin, Footer, ModalBackground, ModalContainer, Note, TitleHead, WrapCloseBtn } from "./StyleModalPin";
import "./StyleModalPin.css"


const ModalPin = ({ setOpenModal }) => {
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
            <Pin></Pin>
          </ContainerPin>

          <Footer>
          <BtnContinue> <Link to="/Status" style={{textDecoration : `none`,color: `#fff`}}> Continue</Link></BtnContinue>
          
          </Footer>
          </ModalContainer>
        
        </ModalBackground>

      
    );
};

export default ModalPin;