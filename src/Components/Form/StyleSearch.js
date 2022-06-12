import styled from "styled-components";
export const LabelText = styled.label`
  margin-top: 2rem;
  display: flex;
  border: 1px solid rgba(169, 169, 169, 0.8);
  border-radius : 12px;
  color: rgba(169, 169, 169, 0.8);
  background-color: rgba(58, 61, 66, 0.1);
  outline: none;
  cursor: pointer;
  height: 54px;
  margin: 30px;
  align-items: center;
  padding-left: 20px;
  &:hover,
  &:focus {
    border: 2px solid #6379f4;
    color: #6379f4;
  }
`;
export const Srch = styled.input`
  width: 320px;
  margin-left: 1rem;
  display: flex;
  border: none;
  background-color: rgba(58, 61, 66, 0);
  color: rgba(169, 169, 169, 0.8);
  font-size: 16px;
  outline: none;
  &:hover,
  &:focus {
    color: #3a3d42;
  }
`;