import React from "react";
import styled from "@emotion/styled";
import Section from "../Layout/Section";
import { WoodenMan, Computer, Hills } from "../../styles/icons";
import BackgroundImage from "../BackgroundImage";
import { MartialCoder, SOURCES } from "../../styles/icons";
const WatermarkTop = styled.div`
  position: absolute;
  opacity: 0.1;
  bottom: 0;
  right: 0;
  max-width: 50vw;
  transform: translateX(30%) translateY(30%);
  svg {
    width: 100%;
  }
`;
const WatermarkBottom = styled.div`
  position: absolute;
  opacity: 0.1;
  top: 0;
  left: 0;
  max-width: 50vw;
  transform: translateX(-30%) translateY(-30%);
  svg {
    width: 100%;
  }
`;

export default () => (
  <Section
    spacing="40px"
    style={{
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}
  >
    <BackgroundImage style={{ opacity: 0.5 }} url={SOURCES.fiord} />
    <WatermarkBottom>
      <Computer />
    </WatermarkBottom>
    <WatermarkTop>
      <WoodenMan />
    </WatermarkTop>
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
