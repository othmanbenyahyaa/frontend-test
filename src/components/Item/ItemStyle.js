import styled from "styled-components";

export const ItemContainer = styled.div`
  background-color: orange;
  display: flex;
  flex-direction: column;
  background: #0597f2;
  border-radius: 4px;
  padding: 10px 20px 10px 20px;
  margin-top: 5px;
  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 18px;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SelectInput = styled.select`
  width: 100%;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 7px;
  display: flex;
`;

export const RadioButtonContainer = styled.div`
  margin-top: 5px;
  display: flex;
  @media screen and (max-width: 768px) {
    margin-top: 3px;
  }
`;

export const RadioButtonLabel = styled.label`
  font-size: 12px;
  display: flex;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const RadioButtonInput = styled.input`
  display: flex;
`;
