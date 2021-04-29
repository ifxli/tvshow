import React from "react";
import {
  Container,
  Circle,
  Mark,
  WaterMarkWrapper,
  LabelWrapper,
  Label,
  Banner,
} from "./styledComponents";

export const WaterMark = () => {
  return (
    <Container>
      <Circle />
      <Mark>
        <WaterMarkWrapper>
          <LabelWrapper>
            <Label>TV</Label>
            <Label>SH</Label>
          </LabelWrapper>
          <Banner />
        </WaterMarkWrapper>
        <Label>OW</Label>
      </Mark>
    </Container>
  );
};
