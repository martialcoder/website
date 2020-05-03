import React from "react";
import styled from "@emotion/styled";
import Section from "../Layout/Section";
import { WoodenMan, Computer } from "../../styles/icons";

const Watermark = styled.div`
  font-weight: lighter;
  position: absolute;
  bottom: 4rem;
  width: 100%;
  text-align: center;
`;

export default () => (
  <Section spacing="20px 10px" style={{ alignItems: "center" }}>
    <Watermark>
      <Computer></Computer>
    </Watermark>
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
