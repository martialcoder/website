import React from "react";
import styled from "@emotion/styled";
import Section from "../Layout/Section";
import { WoodenMan, Computer, Hills } from "../../styles/icons";
import BackgroundImage from "../BackgroundImage";
import { MartialCoder, SOURCES } from "../../styles/icons";
import { COLORS } from "../../styles/colors";
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
    color={COLORS.mimosa}
    style={{ alignItems: "center", justifyContent: "center" }}
  >
    <BackgroundImage
      url={SOURCES.ruin}
      style={{ backgroundPositionX: "-40vw", backgroundPositionY: "40vh" }}
    />
    <div>Card</div>
    <div>Card</div>
    <div>Card</div>
  </Section>
);
