import React from "react";
import Section from "./Section";
import HomeLogo from "./HomeLogo";
import Base from "./Base";
import { getRandomColors } from "../styles/colors";

const sections = getRandomColors(2);
export default (
  <Base color={sections[0]}>
    <Section
      color={sections[1]}
      spacing="20px 10px"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <HomeLogo></HomeLogo>
    </Section>
  </Base>
);
