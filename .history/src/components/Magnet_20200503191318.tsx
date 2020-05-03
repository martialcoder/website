import React from "react";
import { animated } from "react-spring";
import styled from "@emotion/styled";

const Animated = styled(animated.div)`
  position: absolute;
  will-change: transform;
`;

const trans: any = ({ repel = 1, offset = { x: 0, y: 0 } }) => (
  x: number,
  y: number
) => `translate3d(${-x * repel + offset.x}px,${-y * repel + offset.y}px,0)`;

type PropsTypes = {
  xy?: any;
  repel?: number;
  offset?: { x: number; y: number };
  width?: string;
  height?: string;
  className?: string;
  style?: any;
};

const AnimatedCard: React.FC<PropsTypes> = ({
  xy,
  repel,
  offset,
  width,
  height,
  style = {},
  className = "",
  ...props
}) => {
  return (
    <Animated
      className={className}
      style={{
        ...style,
        width,
        height,
        transform: xy.interpolate(trans({ repel, offset, width })),
      }}
      {...props}
    />
  );
};

export default AnimatedCard;
