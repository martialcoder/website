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
      style={{ alignItems: "center" }}
    >
      <Ripple delay="1s" size={80} />
      <Ripple delay="3s" size={120} />
      <Ripple delay="5s" size={180} />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
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
