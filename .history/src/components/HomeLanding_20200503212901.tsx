import React from "react";
import Section from "./Section";
import Base from "./Base";
import HomeLogo from "./HomeLogo";
import CustomIcons from "./Icon";
import { COLORS } from "../styles/colors";
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

export default () => (
  <Section
    color={COLORS.serenity}
    spacing="20px 10px"
    style={{ alignItems: "center" }}
  >
    <GradientWave
      colors={[
        COLORS.aquaSky,
        COLORS.cerise,
        COLORS.blueTurquoise,
        COLORS.mimosa,
      ]}
    />
    <LogoContainer>
      <HomeLogo />
    </LogoContainer>
    <CustomIcons name="martial-coder" height={50} />
  </Section>
);
