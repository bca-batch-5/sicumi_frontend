
import styled from "styled-components";

export const ModalBackground = styled.div`
z-index: 999999999999999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(200, 200, 200);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const ModalContainer = styled.section`

border-radius: 12px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
flex-direction: column;
padding: 25px;
display: inline-block;
text-align: center;
margin-top: 10px;
`;

export const WrapCloseBtn = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
`;
export const CloseBtn = styled.button`
background-color: transparent;
    font-size: 25px;
    cursor: pointer;
    border-radius: 8px;
    background-color: #B4161B;
    border : none;
    color: white;
    height : 28px;

`;

export const TitleHead = styled.h3`
font-size : 18px;
`;

export const Note = styled.p`
width : 302px;
color : #3A3D4299;
text-align: left;
`;

export const ContainerPin = styled.form`
margin-top: 50px;
`;

export const Footer = styled.section`
flex: 20%;
display: flex;
justify-content: flex-end;
align-items: center;
margin-top: 90px;
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
