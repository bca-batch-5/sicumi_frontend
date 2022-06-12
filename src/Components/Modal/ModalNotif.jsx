import React from "react";
import NotifInformation from "../TextBox/NotifInformation";
import { DropdownChild, ModalBackground, TitleTime } from "./StyleModalNotif";

const ModalNotif = ({setOpenModal}) => {
    return(
        <ModalBackground onClick={() => {
            setOpenModal(false);
          }}>
        <DropdownChild>
            <TitleTime>This Week</TitleTime>
            <NotifInformation Title="Recived Money" Desc="Rp 120.000"></NotifInformation>
            <NotifInformation Title="Recived Money" Desc="Rp 120.000"></NotifInformation>
            <TitleTime>This Month</TitleTime>
            <NotifInformation Title="Recived Money" Desc="Rp 120.000"></NotifInformation>
            <NotifInformation Title="Recived Money" Desc="Rp 120.000"></NotifInformation>
            <NotifInformation Title="Recived Money" Desc="Rp 120.000"></NotifInformation>
            </DropdownChild>
            </ModalBackground>
    );
};
export default ModalNotif;