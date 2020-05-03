import { useSpring } from "react-spring";
import React, { useCallback } from "react";
import { useMove } from "react-use-gesture";
import styled from "@emotion/styled";
import Magnet from "./Magnet";
import { useWindowSize } from "../hooks/window";

const getPx = (value: number) => `${value}px`;

const Container = styled.div<{ width: string; height: string }>`
  margin: 4rem;
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
  const bind = useMove(({ down, offset: [x, y] }) => set({ xy: [x, y] }));

  return (
    <Container {...bind()}>
      <Magnet
        className="ying-yang-img"
        xy={props.xy}
        repel={1}
        width={getPx(150)}
        height={getPx(150)}
        style={{
          borderRadius: "50%",
          boxShadow: "0 0 10px 10px rgba(0,0,0,0.3)",
        }}
      />
      <Magnet
        className="cloud-img"
        xy={props.xy}
        repel={20}
        width={getPx(150)}
        height={getPx(150)}
      />
      <Magnet
        className="meditation-img"
        xy={props.xy}
        repel={30}
        width={getPx(150)}
        height={getPx(150)}
      />
    </Container>
  );
}
