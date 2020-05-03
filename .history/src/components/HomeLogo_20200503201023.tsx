import { useSpring } from "react-spring";
import React, { useCallback, useState, useEffect } from "react";
import { useMove } from "react-use-gesture";
import styled from "@emotion/styled";
import Magnet from "./Magnet";
import Icon from "./Icon";
import { useWindowSize } from "../hooks/window";

const getPx = (value: number) => `${value}px`;

const Container = styled.div``;

const YingYang = ({ xy, size = 0, offset }: any) => (
  <Magnet
    xy={xy}
    offset={offset}
    repel={0.4}
    style={{
      borderRadius: "50%",
      boxShadow: "0 0 10px 10px rgba(0,0,0,0.3)",
    }}
  >
    <Icon name="ying-yang" size={size} />
  </Magnet>
);
const Cloud = ({ xy, size = 0, offset }: any) => {
  return (
    <Magnet offset={offset} xy={xy} repel={0.3}>
      <Icon name="cloud" size={size} />
    </Magnet>
  );
};
const Aura = ({ xy, size = 0, offset }: any) => (
  <Magnet
    className="meditation-img"
    offset={offset}
    xy={xy}
    repel={0.2}
    style={{
      backgroundColor: "transparent",
      borderRadius: "50%",
      width: 0,
      height: 9,
      boxShadow: "0 0 50px 80px rgba(255,255,0,.3)",
    }}
  />
);

const Meditation = ({ xy, size = 0, offset }: any) => (
  <Magnet
    className="meditation-img"
    offset={offset}
    xy={xy}
    repel={0.1}
    style={{
      width: getPx(size),
      height: getPx(size),
    }}
  />
);
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
  useEffect(() => {
    setSizes({
      container: width * 0.4,
      yingYang: width * 0.4,
      cloud: width * 0.2,
      meditation: width * 0.2,
    });
  }, [width]);
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
        size={size.meditation}
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
