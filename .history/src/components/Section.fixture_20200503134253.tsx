import React from "react";
import App from "../App";
import Base from "./Base";
import Section from "./Section";

export default (
  <Base color="red" spacing="20px 10px">
    <Section color="transparent">
      <App />
    </Section>
    <Section color="blue">
      <App />
    </Section>

    <Section color="white">
      <App />
    </Section>
    <Section color="green">
      <App />
    </Section>
  </Base>
);
