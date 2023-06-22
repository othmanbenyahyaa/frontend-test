import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  top: 0;
  left: 0;
  background: #f2f2f2;
  flex-direction: column;
  padding: 10px 100px 10px 100px;
  position: fixed;
  @media screen and (max-width: 1024px) {
    padding: 10px 50px;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;
