import styled from "styled-components";

export const Wrappers = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
`;

export const CenterWrapper = styled.section`
  width: 40%;
  margin-left: 20%;
  align-items: center;
`;
export const PinWrapper = styled.div`
  display: flex;
`;
export const InputHolder = styled.div`
  outline: none;
  border: none;
`;
export const Input = styled.input`
  margin: 0.5rem;
  font-size: 24px;
color:#5f3dc4;
  text-align: center;
  width: 53px;
  height: 65px;
  outline: none;
  border: 1px solid rgba(169, 169, 169, 0.6);
  box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
  border-radius: 10px;
    &:hover,
  &:focus{
    border-color:#5f3dc4;
    color: #5f3dc4;

`;
export const MainContent = styled.section`
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid white;
  border-radius: 25px;
  padding: 40px;
`;
