import React from "react";
import styled from "@emotion/styled";
import Section from "../Layout/Section";
import BackgroundImage from "../BackgroundImage";
import { Fitness, Ninja, Inventory, SOURCES } from "../../styles/icons";
import { COLORS } from "../../styles/colors";
import Gradient from "../Animated/GradientWave";
import Button from "../Button";
import { rgba } from "polished";

const Panel = styled.div`
  position: relative;
  background: white;
  display: flex;
  flex-direction: row;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 10px 10px rgba(150, 150, 150, 0.3);
`;

const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
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

export default () => (
  <Section
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
        <div style={{ background: COLORS.cerise, flex: 1, width: "100%" }}>
          <h2>Training</h2>
          <p>Book Time</p>
          <p>Check out my articles!</p>
        </div>
      </Card>
      <Card
        style={{
          borderLeft: "1px solid #e1f1ff",
          borderRight: "1px solid #e1f1ff",
        }}
      >
        <Aura>
          <Ninja width="100px" height="100px" />
        </Aura>
        <div style={{ background: COLORS.cerise, flex: 1, width: "100%" }}>
          <h2>Development</h2>
          <p>Senior Full-Stack Ninja for hire.</p>
        </div>
      </Card>
      <Card>
        <Aura>
          <Inventory width="100px" height="100px" />
        </Aura>
        <div
          style={{
            background: COLORS.cerise,
            flex: 1,
            width: "100%",
            padding: "1rem",
          }}
        >
          <h2>Consulting</h2>
          <p>Cloud Architacture</p>
          <p>Code Analysis</p>
        </div>
      </Card>
    </Panel>
    <div className="panel pricing-table">
      <div className="pricing-plan">
        <img
          src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
          alt=""
          className="pricing-img"
        />
        <h2 className="pricing-header">Personal</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Custom domains</li>
          <li className="pricing-features-item">
            Sleeps after 30 mins of inactivity
          </li>
        </ul>
        <span className="pricing-price">Free</span>
        <a href="#/" className="pricing-button">
          Sign up
        </a>
      </div>

      <div className="pricing-plan">
        <img
          src="https://s28.postimg.cc/ju5bnc3x9/plane.png"
          alt=""
          className="pricing-img"
        />
        <h2 className="pricing-header">Small team</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Never sleeps</li>
          <li className="pricing-features-item">
            Multiple workers for more powerful apps
          </li>
        </ul>
        <span className="pricing-price">$150</span>
        <a href="#/" className="pricing-button is-featured">
          Free trial
        </a>
      </div>

      <div className="pricing-plan">
        <img
          src="https://s21.postimg.cc/tpm0cge4n/space-ship.png"
          alt=""
          className="pricing-img"
        />
        <h2 className="pricing-header">Enterprise</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Dedicated</li>
          <li className="pricing-features-item">
            Simple horizontal scalability
          </li>
        </ul>
        <span className="pricing-price">$400</span>
        <a href="#/" className="pricing-button">
          Free trial
        </a>
      </div>
    </div>
  </Section>
);
