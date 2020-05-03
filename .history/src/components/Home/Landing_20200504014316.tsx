import React from "react";
import Section from "../Layout/Section";
import Base from "../Layout/Base";
import HomeLogo from "./Logo";
import { keyframes } from "@emotion/core";
import { COLORS } from "../../styles/colors";
import { MartialCoder, SOURCES } from "../../styles/icons";
import GradientWave from "../Animated/GradientWave";
import styled from "@emotion/styled";
import Ripple from "../Animated/Ripple";
import BackgroundImage from "../BackgroundImage";

const LogoContainer = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const fadeIn = keyframes`
 from { opacity: 0 }
 to{ opacity: 1 }
`;

const Subtitle = styled.h1`
  font-weight: lighter;
  position: absolute;
  bottom: 4rem;
  width: 100%;
  text-align: center;
`;
const BrandContainer = styled.div`
  position: relative;
  path:nth-of-type(1) {
    fill: black;
  }
  path:nth-of-type(2) {
    fill: white;
    animation: ${fadeIn} ease 10s;
  }
`;

export default () => (
  <Section
    color={COLORS.serenity}
    spacing="20px 10px"
    style={{ alignItems: "center" }}
  >
    <GradientWave
      colors={[
        COLORS.burntSienna,
        COLORS.cerise,
        COLORS.curiousBlue,
        COLORS.java,
      ]}
    />
    <BackgroundImage
      url={SOURCES.mountain}
      style={{ backgroundPositionX: "-10vw", backgroundPositionY: "40vh" }}
    />
    <Ripple delay="15s" duration="25s" size={300} />
    <Ripple delay="10s" duration="20s" size={200} />
    <Ripple delay="20s" duration="15s" size={200} />
    <LogoContainer>
      <HomeLogo />
    </LogoContainer>
    <BrandContainer>
      <MartialCoder width="80vw" height="10rem" style={{ maxWidth: "300px" }} />
    </BrandContainer>
    <Subtitle>Finding a way to good development.</Subtitle>
  </Section>
);
