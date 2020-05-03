import React from "react";
import Section from "./Section";
import HomeLogo from "./HomeLogo";
import Base from "./Base";
import Ripple from "./Ripple";
import { getRandomColors } from "../styles/colors";

const sections = getRandomColors(2);
export default (
  <Base color={sections[0]}>
    <Section
      color={sections[1]}
      spacing="20px 10px"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Ripple delay=".2s" duration="2s"></Ripple>
      <Ripple delay=".3s" duration="3s" size={100}></Ripple>
      <Ripple delay=".4s" duration="4s" size={200}></Ripple>
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
        <HomeLogo></HomeLogo>
      </div>
    </Section>
  </Base>
);
