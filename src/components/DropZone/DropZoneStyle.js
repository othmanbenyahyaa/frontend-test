import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  top: 0;
  left: 0;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;
export const DropZoneContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    padding: 10px;
  }
`;
export const ButtonZone = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
