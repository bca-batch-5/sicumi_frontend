import React, { useState } from "react";
import { useEffect } from "react";
import NumberFormat from "react-number-format";

import ModalPin from "../../Components/Modal/ModalPin";
import ContactInformation from "../../Components/TextBox/ContactInformation";
import DetailsInformation from "../../Components/TextBox/DetailsInformation";
import LayoutHome from "../../Layouts/Home/Home";
import { getDetailAPI, getReceiverAPI } from "../../Services/User";
import {
  BtnContinue,
  EndWrapper,
  MainContent,
  TitleContent,
} from "./StyleConfirmation";

const Confirm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [phone, setPhone] = useState("");
  const [lastBalance, setLastBalance] = useState("");


 
  const getReceiver = async () => {
    const userId = localStorage.getItem("userId");
    const res = await getReceiverAPI(userId);
    console.log(res);
    setFirstname(res.data.data.firstname);
    setPhone(res.data.data.phone);
  };

  const getUser = async () =>{
    const res = await getDetailAPI();
    const transactionAmount = +localStorage.getItem("transactionAmount");
    setLastBalance(res.data.data.balance - transactionAmount );
  }



  useEffect(() => {
    getReceiver();
    getUser();
  }, []);

  return (
    <>
      {modalOpen && <ModalPin setOpenModal={setModalOpen} />}
      <LayoutHome>
        <MainContent>
          <TitleContent>Transfer</TitleContent>
          <ContactInformation
            subTitle={firstname}
            subDesc={phone}
          ></ContactInformation>
          <TitleContent>Details</TitleContent>
          <DetailsInformation
            Title="Amount"
            Desc={
              <NumberFormat
                thousandsGroupStyle="thousand"
                value={localStorage.getItem("transactionAmount")}
                prefix="Rp "
                decimalSeparator=","
                displayType="text"
                type="text"
                thousandSeparator="."
                allowNegative={true}
              />
            }
          ></DetailsInformation>
          <DetailsInformation
            Title="Balance Left"
            Desc={<NumberFormat
            thousandsGroupStyle="thousand"
            value={lastBalance}
            prefix="Rp "
            decimalSeparator=","
            displayType="text"
            type="text"
            thousandSeparator="."
            allowNegative={true}
          />}
          ></DetailsInformation>
          {/* <DetailsInformation
            Title="Date & Time"
            Desc="May 11, 2020 - 12.20"
          ></DetailsInformation> */}
          <DetailsInformation
            Title="Notes"
            Desc={localStorage.getItem("notes")}
          ></DetailsInformation>
          <EndWrapper>
            <BtnContinue
              onClick={() => {
                setModalOpen(true);
              }}
            >
              {" "}
              Continue
            </BtnContinue>
          </EndWrapper>
        </MainContent>
      </LayoutHome>
    </>
  );
};

export default Confirm;
