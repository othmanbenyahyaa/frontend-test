import React from "react";
import {
  ItemContainer,
  ItemTitle,
  SelectInput,
  RadioButtonContainer,
  RadioButtonLabel,
  RadioButtonInput,
} from "./ItemStyle";

const Item = () => {
  return (
    <ItemContainer>
      <ItemTitle>Developer</ItemTitle>
      <SelectInput>
        <option value="">Select an option</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="fullstack">FullStack</option>
      </SelectInput>
      <RadioButtonContainer>
        <RadioButtonLabel>
          <RadioButtonInput type="radio" name="radioGroup" value="remote" />
          Remote
        </RadioButtonLabel>
        <RadioButtonLabel>
          <RadioButtonInput type="radio" name="radioGroup" value="onsite" />
          On Site
        </RadioButtonLabel>
      </RadioButtonContainer>
    </ItemContainer>
  );
};

export default Item;
