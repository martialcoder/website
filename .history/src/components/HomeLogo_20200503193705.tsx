import { useSpring } from "react-spring";
import React, { useCallback, useState } from "react";
import { useMove } from "react-use-gesture";
import styled from "@emotion/styled";
import Magnet from "./Magnet";
import { useWindowSize } from "../hooks/window";

const getPx = (value: number) => `${value}px`;

const Container = styled.div``;

const YingYang = ({ xy, sizeFactor = 1 }: any) => {
  const { width } = useWindowSize();
  const size = width * sizeFactor;
  return (
    <Magnet
      className="ying-yang-img"
      xy={xy}
      repel={1}
      style={{
        width: getPx(size),
        height: getPx(size),
        borderRadius: "50%",
        boxShadow: "0 0 10px 10px rgba(0,0,0,0.3)",
      }}
    />
  );
};
const Cloud = ({ xy, size = 1 }: any) => {
  return (
    <Magnet
      className="cloud-img"
      xy={xy}
      repel={0.8}
      style={{
        width: getPx(size),
        height: getPx(size),
      }}
    />
  );
};
const Meditation = ({ xy, sizeFactor = 1 }: any) => {
  const { width } = useWindowSize();
  const size = width * sizeFactor;
  return (
    <Magnet
      className="meditation-img"
      xy={xy}
      repel={0.6}
      style={{
        width: getPx(size),
        height: getPx(size),
      }}
    />
  );
};
export default function HomeLogo() {
  const [size, setSizes] = useState({
    container: 0,
    yingYang: 0,
    cloud: 0,
    meditation: 0,
  });
  const { width } = useWindowSize();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const bind = useMove(({ offset: [x, y] }) => set({ xy: [x, y] }));
  const containerSize = width * 0.5;
  const yingYangSize = width * sizeFactor;
  const cloudSize = width * sizeFactor;
  const meditationSize = width * sizeFactor;
  return (
    <Container
      {...bind()}
      style={{
        width: getPx(SIZE),
        height: getPx(SIZE),
      }}
    >
      <YingYang xy={props.xy} sizeFactor={0.4} />
      <Cloud xy={props.xy} sizeFactor={0.2} />
      <Meditation xy={props.xy} sizeFactor={0.2} />
    </Container>
  );
}
