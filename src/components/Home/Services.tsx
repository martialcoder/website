import React from "react";
import styled from "@emotion/styled";
import Section from "../Layout/Section";
import BackgroundImage from "../BackgroundImage";
import {
  Fitness,
  Ninja,
  Inventory,
  Computer,
  Cloud,
  SOURCES,
} from "../../styles/icons";
import { COLORS } from "../../styles/colors";
import { rgba } from "polished";
import { react as Training } from "../../content/home/service-training.md";
import { react as Development } from "../../content/home/service-development.md";
import { react as Consulting } from "../../content/home/service-consulting.md";

const Info = styled.div<{ color?: string }>`
  background: ${({ color }) => color};
  flex: 1;
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: white;
  p {
    font-weight: lighter;
  }
`;
const Panel = styled.div`
  position: relative;
  background: white;
  display: flex;
  flex-direction: row;
  border-radius: 1rem;
  box-shadow: 0 0 10px 10px rgba(150, 150, 150, 0.3);
  @media all and (max-width: 30em) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  position: relative;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  min-width: 220px;
  max-width: 300px;
  h2 {
    text-transform: uppercase;
  }
  ul {
    margin: 2rem 0;
    padding: 0;
    text-align: center;
    list-style: none;
    li {
      margin: 0;
      padding: 0;
    }
  }
`;

const Aura = styled.div`
  position: relative;
  margin: 2rem;
  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    background-color: ${rgba(COLORS.ceruleanBlue, 0.3)};
    border-radius: 50%;
    width: 60%;
    height: 60%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: 0.4;
  }
  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    background-color: ${rgba(COLORS.ceruleanBlue, 0.1)};
    border-radius: 50%;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

const DevCard = styled(Card)`
  transform: scale(1.1);
  box-shadow: 0 0 10px 10px rgba(150, 150, 150, 0.3);
  z-index: 1;
`;

export default () => (
  <Section
    id="services"
    spacing="40px"
    color={COLORS.mimosa}
    style={{ alignItems: "center", justifyContent: "center" }}
  >
    <BackgroundImage url={SOURCES.ruin} />
    <Panel>
      <Card>
        <Aura>
          <Fitness width="100px" height="100px" />
        </Aura>
        <Info color={COLORS.emerald}>
          <Training />
        </Info>
      </Card>
      <DevCard>
        <Aura>
          <Computer
            width="100px"
            height="100px"
            style={{ position: "absolute", zIndex: -1, opacity: 0.1 }}
          />
          <Ninja width="100px" height="100px" />
        </Aura>
        <Info color={COLORS.cerise}>
          <Development />
        </Info>
      </DevCard>
      <Card>
        <Aura>
          <Inventory width="100px" height="100px" />
        </Aura>
        <Info color={COLORS.curiousBlue}>
          <Consulting />
        </Info>
      </Card>
    </Panel>
  </Section>
);
