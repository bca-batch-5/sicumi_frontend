import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 1.7;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
export const Main = styled.div`
  width: 100%;
  /* height: 120vh; */
  height: min-content;
  background-color: #f8f5f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 35px;
`;
export const SectionLeft = styled.section`
  position: relative;
  width: 19%;
  min-height: 80vh;
  margin-left: 5%;
  margin-right: 5%;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid white;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
`;
export const Nav = styled.section`
  position: relative;
  width: 100%;
  height: 15vh;
  display: flex;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`;

export const Tagpar = styled.p`
  font-size: 16px;
`;

export const Hlogo = styled.h1`
  font-size: 35px;
  color: #7950f2;
`;

export const SectionRight = styled.section`
  width: 60%;
  height: 70vh;
  margin-right: 10%;
  //
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid white;
  border-radius: 25px;
  padding: 40px;
`;

export const DescAcc = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
`;
export const NameAcc = styled.h2`
  /* color: #7950f2; */
  font-size: 17px;
  margin: 0;
`;
export const PhoneAcc = styled.p`
  /* color: #7950f2; */
  font-size: 13px;
  margin: 0;
`;
export const NavContainer = styled.section`
  width: 100%;
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLeft = styled.section`
  display: flex;
  align-items: center;
`;
export const NavRight = styled.section`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Footer = styled.section`
  width: 100%;
  height: 20%;
  background-color: #7950f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #efefef;
`;
export const RightFooter = styled.section`
  width: 23%;
  margin-right: 10%;
  display: flex;
  justify-content: space-between;
  color: white;
`;
export const LeftFooter = styled.section`
  margin-left: 10%;
  color: white;
`;
export const ListMenu = styled.section`
  height: 80%;
`;

export const List = styled.section`
  font-size: 18px;
  height: 30px;
  color: #dadada;
  opacity: 60%;
  margin-top: 40px;
  padding-left: 20%;
  margin: 10px;

  &:hover,
  &:focus,
  &:active {
    opacity: 100%;
    color: #5f3dc4;
    border-left: 5px solid #5f3dc4;
  }
`;
