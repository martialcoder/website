import React from "react";
import styled from "@emotion/styled";
import Section from "../Layout/Section";
import BackgroundImage from "../BackgroundImage";
import { Fitness, Ninja, Inventory, SOURCES } from "../../styles/icons";
import { COLORS } from "../../styles/colors";
import Gradient from "../Animated/GradientWave";

const Panel = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  border-radius: 1rem;
  overflow: hidden;
`;
const Card = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem;
`;

export default () => (
  <Section
    spacing="40px"
    color={COLORS.mimosa}
    style={{ alignItems: "center", justifyContent: "center" }}
  >
    <BackgroundImage url={SOURCES.ruin} />
    <Panel>
      <Gradient colors={[COLORS.emerald, "#DDD", COLORS.emerald]} />
      <Card>
        <div>
          <div>
            <Fitness width="50px" height="50px" />
          </div>
          <div>Title</div>
          <div>Info</div>
          <div>Action</div>
        </div>
      </Card>
      <Card>
        <div>
          <div>
            <Ninja width="50px" height="50px" />
          </div>
          <div>Title</div>
          <div>Info</div>
          <div>Action</div>
        </div>
      </Card>
      <Card>
        <div>
          <div>
            <Inventory width="50px" height="50px" />
          </div>
          <div>Title</div>
          <div>Info</div>
          <div>Action</div>
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
