import { useSpring } from "react-spring";
import React, { useCallback } from "react";
import { useMove } from "react-use-gesture";
import styled from "@emotion/styled";
import Magnet from "./Magnet";

const getVW = (value: number) => `${value}vw`;

const Container = styled.div``;

const SIZE = 50;

export default function Card() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const bind = useMove(({ offset: [x, y] }) => set({ xy: [x, y] }));

  return (
    <Container
      {...bind()}
      style={{
        width: getVW(SIZE),
        height: getVW(SIZE),
      }}
    >
      <Magnet
        className="ying-yang-img"
        xy={props.xy}
        repel={1}
        style={{
          width: getVW(SIZE * 0.8),
          height: getVW(SIZE * 0.8),
          borderRadius: "50%",
          boxShadow: "0 0 10px 10px rgba(0,0,0,0.3)",
        }}
      />
      <Magnet
        className="cloud-img"
        xy={props.xy}
        repel={0.8}
        style={{
          width: getVW(SIZE * 0.5),
          height: getVW(SIZE * 0.5),
        }}
      />
      <Magnet
        className="meditation-img"
        xy={props.xy}
        repel={0.6}
        style={{
          width: getVW(SIZE * 0.3),
          height: getVW(SIZE * 0.3),
        }}
      />
    </Container>
  );
}
