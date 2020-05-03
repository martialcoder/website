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
      color={COLORS.teal}
      spacing="20px 10px"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Ripple />
      <CustomIcons name="martial-coder" />
      <HomeLogo />
    </Section>
  </Base>
);
