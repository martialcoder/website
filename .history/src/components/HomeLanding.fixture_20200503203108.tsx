import React from "react";
import Section from "./Section";
import Base from "./Base";
import Ripple from "./Ripple";
import HomeLogo from "./HomeLogo";
import CustomIcons from "./Icon";
import { COLORS } from "../styles/colors";
import { rgba } from "polished";

export default (
  <Base>
    <Section
      color={COLORS.serenity}
      spacing="20px 10px"
      style={{ alignItems: "center" }}
    >
      <Ripple duration="5s" color={rgba("white", 0.9)} />
      <Ripple duration="10s" color={rgba("white", 0.9)} size={100} />
      <Ripple duration="20s" color={rgba("white", 0.9)} size={150} />
      <Ripple duration="30s" color={rgba("white", 0.9)} size={400} />

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
