import React from "react";
import ButtonNav from "../../Components/Button/ButtonNav";
import AmountTransfer from "../../Components/TextBox/AmountTransfer";
import ContactInformation from "../../Components/TextBox/ContactInformation";
import LayoutHome from "../../Layouts/Home/Home";
import { EndWrapper, MainContent, Notes, TitleContent } from "./StyledTransfer";

const Transfer= () => {
    return(
    <LayoutHome>
        <MainContent>
            <TitleContent>Transfer</TitleContent>
            <ContactInformation Title="Samuel" Desc="+62834567"></ContactInformation>
            <Notes>Type the amount you want to transfer and then
                                press continue to the next steps.</Notes>
            
            <AmountTransfer ShowBalance="Rp. 120.000  Availible"></AmountTransfer>
            <EndWrapper>
            <ButtonNav Name="Continue" style={{margin: `30px`}}></ButtonNav>
            </EndWrapper>
        </MainContent>
    </LayoutHome>
    );
};

export default Transfer;