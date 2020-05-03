import { useSpring } from "react-spring";
import React, { useCallback, useState, useEffect } from "react";
import { useMove } from "react-use-gesture";
import styled from "@emotion/styled";
import Magnet from "./Magnet";
import {
  Cloud as CloudIcon,
  Coding as CodingIcon,
  YingYang as YingYangIcon,
} from "../styles/icons";
import UpAndDown from "./UpAndDown";
import { useWindowSize } from "../hooks/window";

const getPx = (value: number) => `${value}px`;

const Container = styled.div``;

const YingYang = ({ xy, size = 0, offset }: any) => (
  <Magnet xy={xy} offset={offset} repel={0.1}>
    <YingYangIcon
      style={{
        opacity: 0.5,
        borderRadius: "50%",
        boxShadow: "0 0 10px 10px rgba(0,0,0,0.3)",
      }}
      width={getPx(size)}
      height={getPx(size)}
    />
  </Magnet>
);
const Cloud = ({ xy, size = 0, offset }: any) => {
  return (
    <Magnet offset={offset} xy={xy} repel={0.2}>
      <CloudIcon width={getPx(size)} height={getPx(size)} />
    </Magnet>
  );
};
const Aura = ({ xy, offset }: any) => (
  <Magnet
    className="meditation-img"
    offset={offset}
    xy={xy}
    repel={0.25}
    style={{
      backgroundColor: "transparent",
      borderRadius: "50%",
      width: 0,
      height: 0,
      boxShadow: "0 0 50px 80px rgba(255,255,0,.3)",
    }}
  />
);

const Meditation = ({ xy, size = 0, offset }: any) => (
  <Magnet offset={offset} xy={xy} repel={0.3}>
    <UpAndDown>
      <CodingIcon width={getPx(size)} height={getPx(size)} />
    </UpAndDown>
  </Magnet>
);

export default function HomeLogo() {
  const [size, setSizes] = useState({
    container: 0,
    yingYang: 0,
    cloud: 0,
    meditation: 0,
  });
  const { width, height } = useWindowSize();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const bind = useMove(({ offset: [x, y] }) => set({ xy: [x, y] }));
  const reference = width > height ? width : height;
  useEffect(() => {
    setSizes({
      container: reference * 0.3,
      yingYang: reference * 0.3,
      cloud: reference * 0.15,
      meditation: reference * 0.15,
    });
  }, [reference]);
  return (
    <Container
      {...bind()}
      style={{
        width: getPx(size.container),
        height: getPx(size.container),
      }}
    >
      <YingYang xy={props.xy} size={size.yingYang} />
      <Cloud
        xy={props.xy}
        size={size.cloud}
        offset={{
          x: size.yingYang * 0.5 - size.cloud * 0.5,
          y: size.yingYang * 0.6,
        }}
      />
      <Aura
        xy={props.xy}
        offset={{
          x: size.yingYang * 0.5,
          y: size.yingYang * 0.7,
        }}
      />
      <Meditation
        xy={props.xy}
        size={size.meditation}
        offset={{
          x: size.yingYang * 0.5 - size.meditation * 0.5,
          y: size.yingYang * 0.4,
        }}
      />
    </Container>
  );
}
