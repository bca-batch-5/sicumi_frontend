import React from "react";
import HistoryInformation from "../../Components/TextBox/HistoryInformation";


import LayoutHome from "../../Layouts/Home/Home";
import { MainContent, TitleHistory, TitleTime } from "./StyledHistory";

const History=() => {
    return(
        <LayoutHome>
           <MainContent>
            <TitleHistory>
                Transaction History
            </TitleHistory>
            <TitleTime>
                This Week
            </TitleTime>
            <HistoryInformation Title="Robert JR" Desc="Transfer" Amount="+ Rp 50.000"></HistoryInformation>
            <HistoryInformation Title="Robert JR" Desc="Transfer" Amount="+ Rp 50.000"></HistoryInformation>
            <TitleTime>
                This Month
            </TitleTime>
            <HistoryInformation Title="Robert JR" Desc="Transfer" Amount="+ Rp 50.000"></HistoryInformation>
            <HistoryInformation Title="Robert JR" Desc="Transfer" Amount="+ Rp 50.000"></HistoryInformation>
           </MainContent>
        </LayoutHome>
    );
};

export default History;