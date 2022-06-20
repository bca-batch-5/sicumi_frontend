import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../../Components/Form/Search";
import ContactInformation from "../../Components/TextBox/ContactInformation";
import LayoutHome from "../../Layouts/Home/Home";
import { getContactAPI } from "../../Services/User";
import { MainContent, TitleContact, YWrapp } from "./StyleContact";

const Contact = () => {
  const [detailUser, setDetailUser] = useState([]);
  
  const getAllContact =async () => {
    const res = await getContactAPI();
    console.log("res get contact",res);
    setDetailUser(res.data.data)
  }

useEffect(() => {
  getAllContact();
},[]);

// const LinkTo =(props) =>{
//   const {Title, Desc} = props;
//   const [display, setDisplay] = useState("block");
// }
//   function moveToLocal(){
//     localStorage.setItem("phone", Desc);

//     useEffect(() => {
//       checkDisplay();
//     }, [])
    
//     function checkDisplay(){
//       if (Desc === getPhone()) {
//         setDisplay("none")
  
//     }
//   }
// }

  return (
    <LayoutHome>
      <MainContent>
          <TitleContact> Search Receiver by Friend List
</TitleContact>
<Search />
        <YWrapp>
          {detailUser.map((el) =>{
          return (
            <Link to="/transfer"  style={{textDecoration : `none`}}>
              <ContactInformation userId={el.userId} photo={el.photo} subTitle={el.firstname} subDesc={el.phone}></ContactInformation>
            </Link>
          );
          
          })};
            {/* <Link to="/Transfer" style={{textDecoration : `none`}}>
            <ContactInformation Title="Robert JR" Desc="+62563738237328">
            {" "}
          </ContactInformation>
            </Link>
            <Link to="" style={{textDecoration : `none`}}>
            <ContactInformation Title="Robert JR" Desc="+62563738237328">
            {" "}
          </ContactInformation>
            </Link>
            <Link to="" style={{textDecoration : `none`}}>
            <ContactInformation Title="Robert JR" Desc="+62563738237328">
            {" "}
          </ContactInformation>
            </Link>
            <Link to="" style={{textDecoration : `none`}}>
            <ContactInformation Title="Robert JR" Desc="+62563738237328">
            {" "}
          </ContactInformation>
            </Link> */}
        </YWrapp>
      </MainContent>
    </LayoutHome>
  );
};

export default Contact;
