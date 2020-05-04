import React from "react";
import Section from "../Layout/Section";
import { COLORS } from "../../styles/colors";
import BackgroundImage from "../BackgroundImage";
import { SOURCES } from "../../styles/icons";
import GradientWave from "../Animated/GradientWave";
import ContactForm from "./ContactForm";

import styled from "@emotion/styled";

const FormContainer = styled.div`
  position: relative;
  width: 500px;
  background: #80c64a;
  background: linear-gradient(45deg, ${COLORS.blueIzis}, ${COLORS.cerise});
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  overflow: hidden;
  padding: 72px 55px 65px 55px;
  color: white;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Input = styled.input`
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  width: 100%;
  transition: border-bottom-color ease 400ms;
  padding: 0.5rem 0.5rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  color: white;
  &::placeholder {
    color: white;
  }
  &:focus {
    border-bottom-color: rgba(255, 255, 255, 1) !important;
  }
`;
const Message = styled.textarea`
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  width: 100%;
  transition: border-bottom-color ease 400ms;
  padding: 0.5rem 0.5rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  resize: none;
  &::placeholder {
    color: white;
  }
  &:focus {
    border-bottom-color: rgba(255, 255, 255, 1) !important;
  }
`;

export default () => (
  <Section
    id="contact"
    color={COLORS.serenity}
    spacing="20px 10px"
    style={{ alignItems: "center", justifyContent: "center" }}
  >
    <GradientWave colors={["black", COLORS.curiousBlue]} />
    <BackgroundImage
      url={SOURCES.hills}
      style={{ backgroundPositionY: "20vh", backgroundPositionX: "50%" }}
    />
    <ContactForm />
  </Section>
);
