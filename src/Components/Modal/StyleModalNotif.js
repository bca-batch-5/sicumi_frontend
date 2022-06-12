import styled from "styled-components";

export const ModalBackground = styled.div`
z-index: 999999999999999;
    width: 90vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    justify-content: flex-end;
    padding-top: 100px;
    
`;

export const DropdownChild = styled.div`
display: inline-block;
position: absolute;
background-color: white;
min-width: 200px;
width:400px;
border: 1px solid #7950f2;
margin-left:0px;
float: left;
right: auto;
border-radius: 12px;
&: active,
&:hover,
&:focus
{
  display:block;
}
`;
export const TitleTime = styled.p`
font-size: 16px;
    color: #7A7886;
    margin : 20px;
    margin-bottom: 10px;

`;