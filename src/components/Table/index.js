import React from "react";
import { StyledTable, TableHeader, TableRow, TableCell } from "./TableStyle";

const Table = () => {
  const tableHeaders = ["Id", "Title", "Option", "Status"];
  const tableData = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const renderTableHeaders = () => {
    return tableHeaders.map((header, index) => (
      <TableHeader key={index}>{header}</TableHeader>
    ));
  };

  const renderTableRows = () => {
    return tableData.map((row, index) => (
      <TableRow key={index}>
        {row.map((cell, cellIndex) => (
          <TableCell key={cellIndex}>{cell}</TableCell>
        ))}
      </TableRow>
    ));
  };

  return (
    <StyledTable>
      <thead>
        <TableRow>{renderTableHeaders()}</TableRow>
      </thead>
      <tbody>{renderTableRows()}</tbody>
    </StyledTable>
  );
};

export default Table;
