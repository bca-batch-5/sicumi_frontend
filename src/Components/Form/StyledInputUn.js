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
    border-bottom: 2px solid #6379f4;
    color: #6379f4;
  }
`;

export const Unc = styled.input`
  width: 320px;
  margin-left: 1rem;
  display: flex;
  border: none;
  color: rgba(169, 169, 169, 0.8);
  background-color: #fafcff;
  font-size: 16px;
  outline: none;
  &:hover,
  &:focus {
    color: #3a3d42;
  }
`;
