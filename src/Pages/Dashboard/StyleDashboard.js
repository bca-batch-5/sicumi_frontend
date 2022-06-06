import styled from "styled-components"

export const YWrapp = styled.section`
    display: flex;
  flex-direction: column;
  `;
export const BalanceInformation =styled.section`
width: 100%;
  height: 190px;
  background-color: #7950f2;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  `;

export const XWrapp = styled.section`
margin-top: 20px;
display: flex;
justify-content: space-between;
`;

export const BCLeft = styled.section`
width: 53%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  /* height: 468px; */
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const BCRight = styled.section`
width: 45%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const BILeft = styled.section`
color: white;
  margin : 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ShowBalance = styled.h2`
font-size: 40px;
font-weight: bold;
margin : 0px;
margin-block : 0px;
`;

export const DescBalance = styled.p`
font-size: 18px;
margin : 0px;
`;

export const BIRight = styled.section`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px;
  `;

export const BIButton = styled.section`
border: 1px solid white;
border-radius: 10px;
font-size: 18px;
color: white;
text-decoration: none;
padding: 10px 32px;
margin-top: 15px;

&:hover,
  &:focus,
  &:active {
    border: 1px solid #7950f2;
  background-color: white;
  color : #7950f2;
  }
`;

export const TitleJr = styled.h3`
font-size: 18px;
margin-left: 20px;
margin-top: 0px;
`;
