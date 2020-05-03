import React from "react";
import Section from "./Section";
import Base from "./Base";
import HomeLogo from "./HomeLogo";
import { keyframes } from "@emotion/core";
import { COLORS } from "../styles/colors";
import { MartialCoder } from "../styles/icons";
import GradientWave from "./GradientWave";
import styled from "@emotion/styled";

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
  <Base>
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
      <LogoContainer>
        <HomeLogo />
      </LogoContainer>
      <BrandContainer>
        <MartialCoder
          width="80vw"
          height="10rem"
          style={{ maxWidth: "300px" }}
        />
      </BrandContainer>
      <h1
        style={{
          fontSize: "10vw",
          fontWeight: "lighter",
          position: "absolute",
          bottom: "4rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        Finding a way to good development.
      </h1>
    </Section>
  </Base>
);
