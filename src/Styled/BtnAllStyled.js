import styledComponents from "styled-components";

const BtnAllStyled = styledComponents.input`
margin: 1rem 0rem;
cursor: pointer;
border-radius: 20px;
font-size: inherit;
border: none;
padding: 1.2rem 3rem;
color: #fff;
background-color: #7950f2;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
transition: all 0.5s;
font-weight: 500;

&:hover{
  background-color: #5f3dc4;
}
`;

export default BtnAllStyled;
