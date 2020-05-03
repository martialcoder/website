import React from "react";
import Section from "../Layout/Section";
import styled from "@emotion/styled";

const Subtitle = styled.h1`
  font-weight: lighter;
  position: absolute;
  bottom: 4rem;
  width: 100%;
  text-align: center;
`;

export default () => (
  <Section spacing="20px 10px" style={{ alignItems: "center" }}>
    <Subtitle>Finding a way to good development.</Subtitle>
  </Section>
);
