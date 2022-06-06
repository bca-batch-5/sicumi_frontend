import React from "react";
import LayoutHome from "../../Layouts/Home/Home";
import { BalanceInformation, BCLeft, BCRight, BIButton, BILeft, BIRight,  DescBalance, ShowBalance, TitleJr, XWrapp, YWrapp } from "./StyleDashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactInformation from "../../Components/TextBox/ContactInformation";
import { Link } from "react-router-dom";
import { faArrowUpLong, faPlus, faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import Chart from "../Chart/Index";
import DetailsInformation from "../../Components/TextBox/DetailsInformation";

const Dashboard = () => {

    return(
      <LayoutHome>
          <YWrapp>
              <BalanceInformation>
                <BILeft>
                    <DescBalance>Balance</DescBalance>
                    <ShowBalance> Rp 120.000 </ShowBalance>
                    <DescBalance>+6281 120 312 222</DescBalance>
                </BILeft>
                <BIRight>
                    <Link to="">
                      <BIButton>  
                        <FontAwesomeIcon icon={faArrowUpLong} style={{marginRight: 10}} />
                    Transfer
                    </BIButton>
                    
                    </Link>
                    <Link to="">
                      <BIButton>  
                        <FontAwesomeIcon icon={faPlus} style={{marginRight: 10}} />
                    Top Up
                    </BIButton>
                    
                    </Link>
                    
                </BIRight>
              </BalanceInformation>
              <XWrapp>
                <BCLeft>
                    <YWrapp style={{margin:20}}>
                    <XWrapp style={{marginBottom: 50}}>
                        <YWrapp>
                            <FontAwesomeIcon icon={faArrowDownLong} style={{color: `green`}}></FontAwesomeIcon>
                            <DetailsInformation Title="Income" Desc="Rp 2.120.000"></DetailsInformation>
                        </YWrapp>
                        <YWrapp>
                            <FontAwesomeIcon icon={faArrowUpLong} style={{color: `red`}}></FontAwesomeIcon>
                            <DetailsInformation Title="Expense" Desc="Rp 2.120.000"></DetailsInformation>
                        </YWrapp>
                    </XWrapp>
                    <Chart></Chart>
                    </YWrapp>
                
                </BCLeft>
                <BCRight>
                <XWrapp>
                    <TitleJr> Transaction History</TitleJr>
                    <Link to="" style={{marginRight : 20, textDecoration : `none`}}>See All</Link>
                </XWrapp>
                <YWrapp>
                    <XWrapp style={{marginTop: 0}}>
                    <ContactInformation  Title="Robert JR" Desc="Transfer" style={{margin:0}}>
                    </ContactInformation>
                    </XWrapp>
                    <XWrapp style={{marginTop: 0}}>
                    <ContactInformation  Title="Robert JR" Desc="Transfer">
                    </ContactInformation>
                    </XWrapp>
                    <XWrapp style={{marginTop: 0}}>
                    <ContactInformation  Title="Robert JR" Desc="Transfer">
                    </ContactInformation>
                    </XWrapp>
                    <XWrapp style={{marginTop: 0}}>
                    <ContactInformation  Title="Robert JR" Desc="Transfer">
                    </ContactInformation>
                    </XWrapp>
                
                </YWrapp>
                    
                </BCRight>
              </XWrapp>
          </YWrapp>
      </LayoutHome>  
    );
};

export default Dashboard;