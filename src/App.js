import React from "react";
import { Container } from "./AppStyle";
import DropZone from "./components/DropZone/index";
import Table from "./components/Table/index";
function App() {
  return (
    <Container>
      <DropZone />
      <Table />
    </Container>
  );
}

export default App;
