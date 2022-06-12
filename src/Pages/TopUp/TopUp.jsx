import React from "react";
import ListInformation from "../../Components/TextBox/ListInformation";
import LayoutHome from "../../Layouts/Home/Home";
import { MainContent, TitleContent } from "./StyleTopUp";

const TopUp = () => {
    return(
        <LayoutHome>
            <MainContent>
                <TitleContent>How To Top Up</TitleContent>
                <ListInformation NumList="1" Desc="Go to the nearest ATM or you can use E-Banking."></ListInformation>
                <ListInformation NumList="2" Desc="Type your scurity number on the ATM or E-Banking."></ListInformation>
                <ListInformation NumList="3" Desc="Select 'Transfer' in the menu."></ListInformation>
                <ListInformation NumList="4" Desc="Type the virtual account number that we provide you at the top."></ListInformation>
                <ListInformation NumList="5" Desc="Type the amount of the money want you to top up."></ListInformation>
                <ListInformation NumList="6" Desc="Read the summary details."></ListInformation>
                <ListInformation NumList="7" Desc="Press transfer to top up."></ListInformation>
                <ListInformation NumList="8" Desc="You can see your money in Sicumi within 3 hours"></ListInformation>

            </MainContent>
        </LayoutHome>
    );

};

export default TopUp;