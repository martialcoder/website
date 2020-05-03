import React from "react";
import App from "../App";
import Base from "./Base";
import Section from "./Section";
import ScrollMonitor from "./ScrollMonitor";
import { getRandomColors } from "../styles/colors";

const sections = getRandomColors(5);

export default (
  <ScrollMonitor>
    <Base color="red">
      {sections.map((color) => (
        <Section color={color} spacing="20px 10px">
          <App />
        </Section>
      ))}
    </Base>
  </ScrollMonitor>
);
