import styled from "styled-components";

export const Wrappers = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
`;

export const Manage = styled.section`
  margin-bottom: 2%;
  padding-top: 5px;
  padding-left: 20px;
  display: flex;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  justify-content: space-between;
`;
export const Title = styled.p`
  color: #3a3d4299;
  margin-bottom: 0px;
  margin-top: 5px;
  opacity: 70%;
  font-size: 12px;
`;

export const Desc = styled.h1`
  color: #3a3d42;
  font-style: bold;
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 5px;
  &[contenteditable] {
    outline: 0px solid transparent;
  }
`;

export const Mwrapper = styled.section`
  flex-direction: column;
`;

export const CenterWrapper = styled.section`
  width: 40%;
  margin-left: 30%;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
`;
