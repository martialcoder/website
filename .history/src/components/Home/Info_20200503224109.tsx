import React from "react";
import Section from "../Layout/Section";
import styled from "@emotion/styled";

const Subtitle = styled.h1`
  font-weight: lighter;
  position: absolute;
  bottom: 4rem;
  width: 100%;
  text-align: center;
`;

export default () => (
  <Section spacing="20px 10px" style={{ alignItems: "center" }}>
    <Subtitle>Finding a way to good development.</Subtitle>
    <p>
      Hi there , my name is <strong>Seb</strong>.
    </p>
    <p>
      I've been a professional <strong>Software Developer</strong> since 2008.
      I'm also a <strong>Wing Chun</strong> student.
    </p>
    <p>
      Both, martial arts and code development, had been part of my life since I
      have memory.
    </p>
    <p>
      I can't count how many times I found myself using martial arts concepts in
      software development.
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
