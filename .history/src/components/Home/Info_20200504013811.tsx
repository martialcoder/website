import React from "react";
import Section from "../Layout/Section";
import BackgroundImage from "../BackgroundImage";
import { SOURCES } from "../../styles/icons";
import { COLORS } from "../../styles/colors";

export default () => (
  <Section spacing="40px" color={COLORS.aquaSky} style={{ textAlign: "right" }}>
    <BackgroundImage
      url={SOURCES.windmills}
      style={{ backgroundPositionX: "-30vw", backgroundPositionY: "30vh" }}
    />

    <p>
      Hi there 👋, my name is <strong>Seb</strong>.
    </p>
    <p>
      Martial arts and code development, had been part of my life since I have
      memory.
    </p>
    <p>
      I can't count how many times I found myself using martial arts principles
      and concepts in software development.
    </p>
    <p>This is an intent to share my vision that mixes these two worlds.</p>
    <p>
      <strong>I hope you enjoy it.</strong>
    </p>
    <p>
      And if you are looking for an experienced developer don't forget to{" "}
      <a href="#contact">go here.</a>
    </p>
  </Section>
);
