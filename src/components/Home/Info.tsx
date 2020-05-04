import React from "react";
import Section from "../Layout/Section";
import BackgroundImage from "../BackgroundImage";
import { SOURCES } from "../../styles/icons";
import { COLORS } from "../../styles/colors";
import { react as Info } from "../../content/home/info.md";

export default () => (
  <Section
    id="info"
    spacing="40px"
    color={COLORS.aquaSky}
    style={{ textAlign: "right" }}
  >
    <BackgroundImage
      url={SOURCES.windmills}
      style={{ backgroundPositionX: "-40vw", backgroundPositionY: "40vh" }}
    />
    <Info />
  </Section>
);
