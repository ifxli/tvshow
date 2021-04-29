import React from "react";
import { ContactBlock } from "./ContactBlock/ContactBlock";
import { Container, ContactHeader, DetailWrapper } from "./styledComponents";

const contacts = [
  {
    name: "Address",
    description: "Mailing",
    details: [
      "Primary Address Line",
      "Secondary Address Line",
      "12345 Postal Code",
    ],
  },
  {
    name: "Phone",
    description: "Ring! Ring!",
    details: ["Headeline", "+1 123 456 789"],
  },
  { name: "E-Mail", description: "Swoosh!", details: ["email@email.com"] },
];

export const Footer = () => {
  return (
    <Container>
      <ContactHeader>Contact Us</ContactHeader>
      <DetailWrapper>
        {contacts.map((contact, index) => (
          <ContactBlock {...contact} key={index} />
        ))}
      </DetailWrapper>
    </Container>
  );
};
