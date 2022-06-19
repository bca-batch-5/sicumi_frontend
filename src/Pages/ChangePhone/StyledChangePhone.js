import styled from "styled-components";

export const Wrappers = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
`;

export const CenterWrapper = styled.section`
  width: 40%;
  margin-left: 30%;
  align-items: center;
`;
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

export const Unc = styled.input`
  width: 320px;
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
