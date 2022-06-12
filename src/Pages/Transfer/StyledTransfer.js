import styled from "styled-components";

export const MainContent= styled.section`
border-radius: 25px;
background-color:white;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
padding-left: 30px;
`;

export const TitleContent = styled.h2`
font-size :18px;
margin-bottom :30px;
margin-block-start:0px;
padding-top:30px;
`;

export const Notes = styled.p`
width: 336px; 
font-size: 18px;
margin: 30px; 
margin-left:0px;
color: #7A7886;
`;

export const BIButton = styled.section`
border: 1px solid white;
border-radius: 10px;
font-size: 18px;
background-color: #7950f2;
text-decoration: none;
padding: 10px 32px;
margin-top: 15px;
width : 47px;       

&:hover,
  &:focus,
  &:active {
    border: 1px solid #7950f2;
    padding :12px 35px;
  }
`;

export const EndWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: flex-end;
padding:30px;
`;