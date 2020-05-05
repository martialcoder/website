import React from "react";
import Section from "../Layout/Section";
import BackgroundImage from "../BackgroundImage";
import { SOURCES } from "../../styles/icons";
import { COLORS } from "../../styles/colors";
import { react as Info } from "../../content/home/info.md";
import Arrow from "../Animated/Arrow";
import { useScroll } from "../Animated/Scroll";
export default () => {
  const { scrollTo } = useScroll();

  return (
    <Section
      id="info"
      spacing="40px"
      color={COLORS.aquaSky}
      style={{ textAlign: "right" }}
    >
      <BackgroundImage
        url={SOURCES.windmills}
        style={{ backgroundPositionX: "-40vw", backgroundPositionY: "40vh" }}
      />
      <Info />
      <Arrow
        onClick={() => scrollTo("services")}
        size="50px"
        style={{
          cursor: "pointer",
          opacity: 0.3,
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          zIndex: 100,
        }}
      />
    </Section>
  );
};
