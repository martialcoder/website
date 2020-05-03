import React from "react";
import Section from "./Section";
import Base from "./Base";
import Ripple from "./Ripple";
import HomeLogo from "./HomeLogo";
import CustomIcons from "./Icon";
import { COLORS } from "../styles/colors";

export default (
  <Base>
    <Section
      color={COLORS.serenity}
      spacing="20px 10px"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Ripple />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <HomeLogo />
      </div>
      <CustomIcons name="martial-coder" size={200} />
    </Section>
  </Base>
);
