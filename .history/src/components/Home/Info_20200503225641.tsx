import React from "react";
import styled from "@emotion/styled";
import Section from "../Layout/Section";
import { WoodenMan, Computer } from "../../styles/icons";

const WatermarkLeft = styled.div`
  position: absolute;
  opacity: 0.5;
  bottom: 0;
  left: 0;
  max-width: 400px;
  transform: translateX(-50%) translateY(50%);
`;
const WatermarkRight = styled.div`
  position: absolute;
  opacity: 0.5;
  top: 0;
  right: 0;
  max-width: 400px;
  transform: translateX(50%) translateY(-50%);
`;

export default () => (
  <Section spacing="20px 10px" style={{ alignItems: "center" }}>
    <WatermarkRight>
      <Computer />
    </WatermarkRight>
    <WatermarkLeft>
      <WoodenMan />
    </WatermarkLeft>
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
