import { useSpring } from "react-spring";
import React, { useCallback } from "react";
import { useMove } from "react-use-gesture";
import styled from "@emotion/styled";
import Magnet from "./Magnet";
import { useWindowSize } from "../hooks/window";

const getPx = (value: number) => `${value}px`;

const Container = styled.div``;

const YingYang = ({ xy }) => {
  const { width } = useWindowSize();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const bind = useMove(({ offset: [x, y] }) => set({ xy: [x, y] }));
  const SIZE = width * 0.5;
  console.log(SIZE, width);
  return (
    <Magnet
      className="ying-yang-img"
      xy={xy}
      repel={1}
      style={{
        width: getPx(SIZE * 0.8),
        height: getPx(SIZE * 0.8),
        borderRadius: "50%",
        boxShadow: "0 0 10px 10px rgba(0,0,0,0.3)",
      }}
    />
  );
};
export default function Card() {
  const { width } = useWindowSize();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const bind = useMove(({ offset: [x, y] }) => set({ xy: [x, y] }));
  const SIZE = width * 0.5;
  console.log(SIZE, width);
  return (
    <Container
      {...bind()}
      style={{
        width: getPx(SIZE),
        height: getPx(SIZE),
      }}
    >
      <Magnet
        className="ying-yang-img"
        xy={props.xy}
        repel={1}
        style={{
          width: getPx(SIZE * 0.8),
          height: getPx(SIZE * 0.8),
          borderRadius: "50%",
          boxShadow: "0 0 10px 10px rgba(0,0,0,0.3)",
        }}
      />
      <Magnet
        className="cloud-img"
        xy={props.xy}
        repel={0.8}
        style={{
          width: getPx(SIZE * 0.4),
          height: getPx(SIZE * 0.4),
        }}
      />
      <Magnet
        className="meditation-img"
        xy={props.xy}
        repel={0.6}
        style={{
          width: getPx(SIZE * 0.4),
          height: getPx(SIZE * 0.4),
        }}
      />
    </Container>
  );
}
