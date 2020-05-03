import React from "react";
import App from "../App";
import Base from "./Base";
import Section from "./Section";

export default (
  <Base color="red" spacing="20px 10px">
    <Section>
      <App />
    </Section>
    <Section>
      <App />
    </Section>

    <Section>
      <App />
    </Section>
    <App />
  </Base>
);
