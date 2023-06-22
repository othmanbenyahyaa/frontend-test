import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  margin-buttom: 30px;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const BtnSave = styled.button`
  background-color: #0597f2;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 30px;
  @media screen and (max-width: 768px) {
    padding: 8px 24px;
  }
`;
