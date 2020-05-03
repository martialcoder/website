import React, { useRef, useEffect, DOMElement } from "react";

import styled from "@emotion/styled";
import { useScroll } from "react-use-gesture";

type PropsTypes = {
  color?: string;
  spacing?: string | number;
};

const Base = styled.div<PropsTypes>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: ${({ spacing = "0" }) =>
    typeof spacing === "number" ? `${spacing.toFixed(0)}px` : spacing};
  background-color: ${({ color = "transparent" }) => color};
  &,
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;

const useAnchors = () => {
  const breakpoints = useRef<{ [anchor: string]: number }>({});
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (ref.current) {
      const anchorNodes = ref.current.querySelectorAll("[id]");
      anchorNodes.forEach((node) => {
        breakpoints[node.id] = node.offsetTop;
      });
    }
  }, [ref.current]);
  return { ref };
};

export default function ScrollMonitor(props: any) {
  const { ref } = useAnchors();
  const bind = useScroll((state) => {
    console.log(state.lastOffset);
  });

  return <Base ref={ref} {...props} {...bind()} />;
}
