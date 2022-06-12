import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ContactInformation from "../../Components/TextBox/ContactInformation";
import DetailsInformation from "../../Components/TextBox/DetailsInformation";
import ButtonNav from "../../Components/Button/ButtonNav"
import LayoutHome from "../../Layouts/Home/Home";
import { BodyContent, FooterContent, HeadContent, MainContent, SubTitle, TitleContent } from "./StyleStatus";

const Status = ()=>{
    return (
<LayoutHome>
    <MainContent>
        <HeadContent>
        <FontAwesomeIcon icon={faCircleCheck} style={{color:`green` , fontSize:`70px`}}></FontAwesomeIcon>
        <TitleContent>Transfer Succsess</TitleContent>
        </HeadContent>
        <BodyContent>
        <SubTitle>Details</SubTitle>
        <DetailsInformation Title="Amount" Desc="Rp 120.000"></DetailsInformation>
        <DetailsInformation Title="Balance Left" Desc="Rp 0"></DetailsInformation>
        <DetailsInformation Title="Date & Time" Desc="May 11, 2020 - 12.20"></DetailsInformation>
        <DetailsInformation Title="Notes" Desc="For buying some socks"></DetailsInformation>
        <SubTitle>Transfer to</SubTitle>
        <ContactInformation Title=" Samuel" Desc="+6283456789"></ContactInformation>
        </BodyContent>
        <FooterContent>
            <ButtonNav Name="Back to Home">

            </ButtonNav>
        </FooterContent>
    </MainContent>
</LayoutHome>
    );  
};

export default Status;