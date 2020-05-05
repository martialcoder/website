import React from "react";
import Section from "../Layout/Section";
import Base from "../Layout/Base";
import HomeLogo from "./Logo";
import { keyframes } from "@emotion/core";
import { COLORS } from "../../styles/colors";
import { MartialCoder, SOURCES } from "../../styles/icons";
import GradientWave from "../Animated/GradientWave";
import styled from "@emotion/styled";
import Arrow from "../Animated/Arrow";
import { useScroll } from "../Animated/Scroll";
import BackgroundImage from "../BackgroundImage";
import { react as Subtitle } from "../../content/home/subtitle.md";

const LogoContainer = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled(Section)`
  .frontmatter-markdown {
    position: absolute;
    bottom: 4rem;
    width: 100%;
  }
  h2 {
    font-weight: lighter;
    text-align: center;
  }
`;

const fadeIn = keyframes`
 from { opacity: 0 }
 to{ opacity: 1 }
`;

const BrandContainer = styled.div`
  position: relative;
  path:nth-of-type(1) {
    fill: black;
  }
  path:nth-of-type(2) {
    fill: white;
    animation: ${fadeIn} ease 10s;
  }
`;

export default () => {
  const { scrollTo } = useScroll();

  return (
    <Container
      id="landing"
      color={COLORS.serenity}
      spacing="20px 10px"
      style={{ alignItems: "center" }}
    >
      <GradientWave
        colors={[
          COLORS.burntSienna,
          COLORS.cerise,
          COLORS.curiousBlue,
          COLORS.java,
        ]}
      />
      <BackgroundImage
        url={SOURCES.mountain}
        style={{ backgroundPositionX: "-10vw", backgroundPositionY: "50vh" }}
      />
      <LogoContainer>
        <HomeLogo />
      </LogoContainer>
      <BrandContainer>
        <MartialCoder
          width="80vw"
          height="10rem"
          style={{ maxWidth: "300px" }}
        />
      </BrandContainer>
      <Subtitle />
      <Arrow
        onClick={() => scrollTo("info")}
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
    </Container>
  );
};
