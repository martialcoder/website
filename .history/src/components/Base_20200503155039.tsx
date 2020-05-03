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

export default function ScrollMonitor(props: any) {
  const bind = useScroll((state) => {
    console.log(state.lastOffset);
  });
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const anchorNodes = ref.current.querySelectorAll("[id]");
      anchorNodes.forEach((node) => {
        console.log(node.offsetTop);
      });
    }
  }, [ref.current]);

  return <Base ref={ref} {...props} {...bind()} />;
}
