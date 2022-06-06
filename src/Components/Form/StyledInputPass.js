import styled from "styled-components";
export const LabelText = styled.label`
  margin-top: 2rem;
  display: flex;
  border-bottom: 1px solid rgba(169, 169, 169, 0.8);
  color: rgba(169, 169, 169, 0.8);
  outline: none;
  cursor: pointer;
  &:hover,
  &:focus {
    border-bottom: 2px solid #5f3dc4;
    color: #5f3dc4;
  }
`;

export const Passc = styled.input`
  width: 300px;
  margin-left: 1rem;
  display: flex;
  border: none;
  color: rgba(169, 169, 169, 0.8);
  font-size: 16px;
  outline: none;
  &:hover,
  &:focus {
    color: #5f3dc4;
  }
`;
