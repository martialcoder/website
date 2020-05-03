import { useSpring } from "react-spring";
import React, { useCallback } from "react";
import { useMove } from "react-use-gesture";
import styled from "@emotion/styled";
import Magnet from "./Magnet";
import { useWindowSize } from "../hooks/window";

const getPx = (value: number) => `${value}px`;

const Container = styled.div<{ width: string; height: string }>`
  margin: 4rem;
  width: ${({ width = "0" }) => width};
  height: ${({ height = "0" }) => height};
`;

export default function Card() {
  const windowsSize = useWindowSize();
  const calc = useCallback(
    (x: number, y: number) => [
      x - windowsSize.width / 2,
      y - windowsSize.height / 2,
    ],
    [windowsSize]
  );
  const SIZE = windowsSize.height * 0.5;

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const bind = useMove(({ down, offset: [x, y] }) => set({ xy: calc(x, y) }));

  return (
    <Container
      width={getPx(SIZE)}
      height={getPx(SIZE)}
      className="home-logo"
      {...bind()}
    >
      <Magnet
        className="ying-yang-img"
        xy={props.xy}
        repel={6}
        width={getPx(150)}
        height={getPx(150)}
        style={{
          borderRadius: "50%",
          boxShadow: "0 0 10px 10px rgba(0,0,0,0.3)",
        }}
      ></Magnet>
      <Magnet
        xy={props.xy}
        repel={6}
        width={getPx(150)}
        height={getPx(150)}
        offset={{ x: SIZE / 2, y: SIZE - 50 }}
        style={{
          backgroundColor: "rgba(255,255,0,1)",
          borderRadius: "50%",
          boxShadow: "0 0 10px 10px rgba(0,0,0,0.3)",
        }}
      />
      <Magnet
        xy={props.xy}
        repel={-10}
        width={getPx(100)}
        height={getPx(100)}
        offset={{ x: SIZE / 2, y: SIZE - 50 }}
        style={{
          backgroundColor: "rgba(255,255,0,1)",
          borderRadius: "50%",
          boxShadow: "0 0 10px 10px rgba(0,0,0,0.3)",
        }}
      />
    </Container>
  );
}
