import styled from "styled-components";

export const MainContent= styled.section`
border-radius: 25px;
background-color:white;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`;

export const TitleContent = styled.h2`
font-size :18px;
margin :30px;
padding-top:30px;
`;

export const EndWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: flex-end;
padding:30px;
`;

export const BtnContinue = styled.button`
display: inline-block;
border-radius: 10px;
background: #7950f2;
padding: 16px 47px;
color: #fff;
cursor: pointer;
font-size: 18px;
font-weight: 700;
border : none;

&:hover,
&:focus,
&:active
 {
    color: #5f3dc4;
    background-color: white;
    border:1px solid #5f3dc4;
}
`;