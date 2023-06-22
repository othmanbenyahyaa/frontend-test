import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 68vh;
  flex-direction: column;
  background: #ffffff;
  padding: 10px 50px;
  @media screen and (max-width: 1024px) {
    padding: 10px 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;
