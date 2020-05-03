import React from "react";
import { animated } from "react-spring";
import styled from "@emotion/styled";

const Animated = styled(animated.div)`
  position: absolute;
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
  ${({ url }: { url?: string }) =>
    url ? `background-image: url(${url});` : ""}
`;

const trans: any = ({ repel = 1, offset = { x: 0, y: 0 } }) => (
  x: number,
  y: number
) =>
  `translate3d(${-x / (1 / repel) + offset.x}px,${
    -y / (1 / repel) + offset.y
  }px,0)`;

type PropsTypes = {
  url?: string;
  xy?: any;
  repel?: number;
  offset?: { x: number; y: number };
  width?: string;
  height?: string;
  className?: string;
  style?: any;
};

const AnimatedCard: React.FC<PropsTypes> = ({
  url,
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
      url={url}
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
