import React from "react";
import Section from "./Section";
import Base from "./Base";
import Ripple from "./Ripple";
import HomeLogo from "./HomeLogo";
import CustomIcons from "./Icon";

export default (
  <Base>
    <Section>
      <Ripple />
      <CustomIcons name="martial-coder" />
      <HomeLogo />
    </Section>
  </Base>
);
