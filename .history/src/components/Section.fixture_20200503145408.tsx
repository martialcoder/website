import React from "react";
import App from "../App";
import Base from "./Base";
import Section from "./Section";
import { getRandomColors } from "../styles/colors";

const sections = getRandomColors(5);

export default (
  <Base color="red">
    <Section color="transparent" spacing="20px 10px">
      <App />
    </Section>
    <Section color="blue" spacing="20px 10px">
      <App />
    </Section>

    <Section color="white" spacing="20px 10px">
      <App />
    </Section>
    <Section color="green" spacing="20px 10px">
      <App />
    </Section>
  </Base>
);
