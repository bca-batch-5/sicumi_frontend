import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect } from "react";
import { useState } from "react";
import NumberFormat from "react-number-format";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ButtonNav from "../../Components/Button/ButtonNav";
import AmountTransfer from "../../Components/TextBox/AmountTransfer";
import ContactInformation from "../../Components/TextBox/ContactInformation";
import { ShowBalance } from "../../Components/TextBox/styleAmountTransfer";
import LayoutHome from "../../Layouts/Home/Home";
import { getDetailAPI, getReceiverAPI } from "../../Services/User";
import { AddNote, EndWrapper, LabelAmount, LabelNote, Lamt, MainContent, Notes, TitleContent, Wrapper } from "./StyledTransfer";

const Transfer = () => {
  const [firstname, setFirstname] = useState("");
  const [phone, setPhone] = useState("");
  const [balance, setBalance] = useState("");
  const [amount, setAmount] = useState ("");

const navigate = useNavigate();
  function inputAmount(e) {
      setAmount(e.target.value.replace(/[^0-9]+/g, ""));
      localStorage.setItem("transactionAmount", amount);
  }
  function inputText(e) {
 
      localStorage.setItem("notes", e.target.value);
  }

  function setLocal() {
    navigate("/confirmation")
  }

  const getDetailByUserId = async () => {
    const res = await getDetailAPI();
    console.log("res get by id", res);
    setBalance(res.data.data.balance);
    setPhone(res.data.data.phone);
    console.log("saldo", balance);
  };
  const getReceiver = async () => {
    const userId = localStorage.getItem("userId");
    const res = await getReceiverAPI(userId);
    console.log(res);
    setFirstname(res.data.data.firstname);
    setPhone(res.data.data.phone);
  };

  useEffect(() => {
    getReceiver();
    getDetailByUserId();
  }, []);

  return (
    <LayoutHome>
      <MainContent>
        <TitleContent>Transfer</TitleContent>
        <ContactInformation
          subTitle={firstname}
          subDesc={phone}
        ></ContactInformation>
        <Notes>
          Type the amount you want to transfer and then press continue to the
          next steps.
        </Notes>
        <Wrapper>
          <LabelAmount>
          <Lamt prefix="Rp" value={amount} onChange={inputAmount} placeholder="0.00"></Lamt>
          </LabelAmount>
          
          <ShowBalance><NumberFormat
                  thousandsGroupStyle="thousand"
                  value={balance}
                  prefix="Rp "
                  decimalSeparator=","
                  displayType="text"
                  type="text"
                  thousandSeparator="."
                  allowNegative={true}
                /> Available</ShowBalance>
          <LabelNote>
            <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
            <AddNote  onChange={inputText}></AddNote>
          </LabelNote>
        </Wrapper>
        <EndWrapper>
            <Link to="/confirmation">
          <ButtonNav onClick={setLocal} Name="Continue" style={{ margin: `30px` }}></ButtonNav>
          </Link>
        </EndWrapper>
      </MainContent>
    </LayoutHome>
  );
};

export default Transfer;
