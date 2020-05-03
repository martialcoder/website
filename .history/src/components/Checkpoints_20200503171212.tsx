import React, {
  useRef,
  useEffect,
  DOMElement,
  useState,
  useCallback,
  createContext,
  useContext,
} from "react";
import reduce from "lodash/reduce";
import inRange from "lodash/inRange";

import styled from "@emotion/styled";
import { useScroll } from "react-use-gesture";
import Base from "./Base";

const Checkpoints = styled(Base)``;

const useAnchors = ({ onCheckpoint }) => {
  const [selectedBreakpoint, setSelectedBreakpoint] = useState({});
  const breakpoints = useRef<{ id: string; offset: number }[]>([]);
  const selectedBreak = useRef<{ id: string; offset: number }>({});
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (ref.current) {
      const anchorNodes = ref.current.querySelectorAll("[id]");
      anchorNodes.forEach((node) => {
        breakpoints.current.push({ id: node.id, offset: node.offsetTop });
      });
    }
  }, [ref.current, breakpoints.current]);

  const updateBreakpoint = useCallback((y, dirY) => {
    const selected = breakpoints.current.find((breakpoint, i) => {
      const nextBreak = breakpoints.current[i + 1];
      return nextBreak
        ? inRange(y, breakpoint.offset, nextBreak.offset)
        : breakpoint.offset <= y;
    });
    if (selected?.id !== selectedBreak.current.id) {
      selectedBreak.current.id = selected?.id;
      selectedBreak.current.offset = selected?.offset;
      onCheckpoint && onCheckpoint(selected);
    }
  }, []);
  return { ref, breakpoints, selectedBreakpoint, updateBreakpoint };
};

const Context = createContext<{ state?: any; setState?: Function }>({});

const useCheckpoints = () => {
  const { state, setState } = useContext(Context);
};

export default function CheckpointMonitor(props: any) {
  const [state, setState] = useState({});
  const { ref, breakpoints, selectedBreakpoint, updateBreakpoint } = useAnchors(
    {
      onCheckpoint: (b) => {
        console.log("changed", b);
      },
    }
  );

  const bind = useScroll((state) => {
    const [x, y] = state.offset;
    const [dirX, dirY] = state.direction;
    console.log(state.direction);
    updateBreakpoint(y, dirY);
  });
  console.log(selectedBreakpoint);

  return (
    <Context.Provider value={{ state, setState }}>
      <Checkpoints ref={ref} {...props} {...bind()} />;
    </Context.Provider>
  );
}
