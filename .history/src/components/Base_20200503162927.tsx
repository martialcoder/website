import React, {
  useRef,
  useEffect,
  DOMElement,
  useState,
  useCallback,
} from "react";
import reduce from "lodash/reduce";
import inRange from "lodash/inRange";

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
  const [selectedBreakpoint, setSelectedBreakpoint] = useState("");
  const breakpoints = useRef<{ id: string; offset: number }[]>([]);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (ref.current) {
      const anchorNodes = ref.current.querySelectorAll("[id]");
      anchorNodes.forEach((node) => {
        breakpoints.current.push({ id: node.id, offset: node.offsetTop });
      });
    }
  }, [ref.current, breakpoints.current]);

  const updateBreakpoint = useCallback((y) => {
    const selected = breakpoints.current.find((breakpoint, i) => {
      const nextBreak = breakpoints.current[i + 1];
      console.log(breakpoint);
      return nextBreak
        ? inRange(y, breakpoint.offset - 100, nextBreak.offset)
        : breakpoint.offset < y;
    });
    // setSelectedBreakpoint(
    //   reduce(
    //     breakpoints.current,
    //     (res, breakValue, key) => {
    //       if (inRange(y, breakValue - 100, breakValue + 100)) return key;
    //       else return res;
    //     },
    //     selectedBreakpoint
    //   )
    // );
    console.log(y, selected);
  }, []);
  return { ref, breakpoints, selectedBreakpoint, updateBreakpoint };
};

export default function ScrollMonitor(props: any) {
  const {
    ref,
    breakpoints,
    selectedBreakpoint,
    updateBreakpoint,
  } = useAnchors();

  const bind = useScroll((state) => {
    const [x, y] = state.offset;
    updateBreakpoint(y);
  });
  console.log(selectedBreakpoint);

  return <Base ref={ref} {...props} {...bind()} />;
}
