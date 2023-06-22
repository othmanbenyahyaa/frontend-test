import React from "react";
import { Container, ButtonZone, DropZoneContainer } from "./DropZoneStyle.js";
import Button from "../Button/index.js";
import ZoneLeft from "../ZoneLeft/index.js";
import ZoneRight from "../ZoneRight/index.js";

function DropZone() {
  return (
    <Container>
      <DropZoneContainer>
        <ZoneLeft />
        <ZoneRight />
      </DropZoneContainer>
      <ButtonZone>
        <Button />
      </ButtonZone>
    </Container>
  );
}

export default DropZone;
