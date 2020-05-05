import React from "react";
import SEO from "../components/SEO";
import Contact from "../components/Home/Contact";
import Landing from "../components/Home/Landing";
import Info from "../components/Home/Info";
import Services from "../components/Home/Services";
import { useScroll } from "../components/Animated/Scroll";
import Section from "../components/Layout/Section";
import Logo from "../components/Home/Logo";
import { COLORS } from "../styles/colors";
import Gradient from "../components/Animated/GradientWave";

export default () => {
  const { scrollTo } = useScroll();
  console.log(scrollTo);
  return (
    <>
      <SEO
        title="martialCoder ~ Content"
        description="Finding a way to good development."
      />
      <Section style={{ textAlign: "center", padding: "2rem" }}>
        <Gradient
          colors={[
            COLORS.emerald,
            COLORS.mimosa,
            COLORS.emerald,
            COLORS.cerise,
            COLORS.emerald,
          ]}
        />
        <h1>Comming Soon</h1>
        <div
          style={{
            flex: 1,
            justifyContent: "center",
            display: "flex",
            padding: "2rem",
          }}
        >
          <Logo />
        </div>
      </Section>
    </>
  );
};
