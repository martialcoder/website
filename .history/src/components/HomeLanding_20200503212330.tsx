import React from "react";
import Section from "./Section";
import Base from "./Base";
import Ripple from "./Ripple";
import HomeLogo from "./HomeLogo";
import CustomIcons from "./Icon";
import { COLORS } from "../styles/colors";
import GradientWave from "./GradientWave";

export default () => (
  <Base>
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
      <div
        style={{
          top: 0,
          left: 0,
          position: "absolute",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeLogo />
      </div>
      <CustomIcons name="martial-coder" size={200} />
    </Section>
  </Base>
);
