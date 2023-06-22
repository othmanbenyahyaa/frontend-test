import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TableHeader = styled.th`
  width: 100%;
  background-color: #0d0d0d;
  border-bottom: 1px solid #ddd;
  color: #ffffff;
  justify-content: flex-start;
  text-align: left;
  padding: 10px;
  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;

export const TableRow = styled.tr`
  width: 100%;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const TableCell = styled.td`
  width: 100%;
  justify-content: flex-start;
  padding: 10px;
  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;
