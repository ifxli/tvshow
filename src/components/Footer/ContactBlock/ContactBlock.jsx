import React from "react";
import {
  Container,
  Title,
  Highlight,
  Detail,
  DetailLine1,
  DetailLine2,
  DetailLine3,
} from "./styledComponents";

export const ContactBlock = ({ name, description, details }) => {
  return (
    <Container>
      <Title>
        <Highlight>{name}</Highlight>&nbsp;| {description}
      </Title>
      <Detail>
        <DetailLine1>{details[0]}</DetailLine1>
        <DetailLine2>{details[1]}</DetailLine2>
        <DetailLine3>{details[2]}</DetailLine3>
      </Detail>
    </Container>
  );
};
