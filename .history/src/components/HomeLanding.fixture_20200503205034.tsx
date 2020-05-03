import React from "react";
import Section from "./Section";
import Base from "./Base";
import Ripple from "./Ripple";
import HomeLogo from "./HomeLogo";
import CustomIcons from "./Icon";
import { COLORS } from "../styles/colors";
import Gradient from "./Gradient";

export default (
  <Base>
    <Section
      color={COLORS.serenity}
      spacing="20px 10px"
      style={{ alignItems: "center" }}
    >
      <GradientWave />
      {/* <Ripple duration="5s" color={COLORS.mimosa} />
      <Ripple duration="10s" color={COLORS.mimosa} size={100} />
      <Ripple duration="20s" color={COLORS.mimosa} size={150} />
      <Ripple duration="30s" color={COLORS.mimosa} size={400} />
      <Ripple
        delay=".4s"
        color={COLORS.mimosa}
        duration="4s"
        size={200}
      ></Ripple> */}
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
