import React from "react";
import Section from "./Section";
import HomeLogo from "./HomeLogo";
import Base from "./Base";
import { getRandomColors } from "../styles/colors";

const sections = getRandomColors(2);
export default (
  <Base color={sections[0]} spacing="20px 10px">
    <Section color={sections[1]}>
      <HomeLogo></HomeLogo>
    </Section>
  </Base>
);
