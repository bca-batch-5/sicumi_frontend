import React, {useState} from "react";

import ModalPin from "../../Components/Modal/ModaPin";
import ContactInformation from "../../Components/TextBox/ContactInformation";
import DetailsInformation from "../../Components/TextBox/DetailsInformation";
import LayoutHome from "../../Layouts/Home/Home";
import { BtnContinue, EndWrapper, MainContent, TitleContent } from "./StyleConfirmation";


const Confirm = () => {

    const [modalOpen, setModalOpen]= useState(false)
    return (
        <>
        {modalOpen && <ModalPin setOpenModal={setModalOpen}/>}
        <LayoutHome>
            <MainContent>
                <TitleContent>Transfer</TitleContent>
                <ContactInformation Title="Samuel" Desc="+62345667"></ContactInformation>
                <TitleContent>Details</TitleContent>
                <DetailsInformation Title="Amount" Desc="Rp 120.000"></DetailsInformation>
                <DetailsInformation Title="Balance Left" Desc="Rp 0"></DetailsInformation>
                <DetailsInformation Title="Date & Time" Desc="May 11, 2020 - 12.20"></DetailsInformation>
                <DetailsInformation Title="Notes" Desc="For buying some socks"></DetailsInformation>
                <EndWrapper>

                <BtnContinue onClick={() => {
                        setModalOpen(true);
                    }}> Continue</BtnContinue>
              
            
                
               
                </EndWrapper>
                
            </MainContent>
        
        </LayoutHome>
        </>
    );
};

export default Confirm;