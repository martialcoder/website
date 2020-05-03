import React from "react";
import Base from "../Base";
import Section from "../Section";
import Logo from "./Logo";
import { getRandomColors } from "../../styles/colors";

const sections = getRandomColors(5);

export default (
  <Base>
    <Section color={sections[0]} spacing="20px 10px">
      <Logo />
    </Section>
  </Base>
);
