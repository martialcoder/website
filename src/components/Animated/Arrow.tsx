import React from "react";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import { ArrowDown } from "../../styles/icons";

type PropsTypes = {
  delay?: string;
  duration?: string;
  size?: number;
  colors?: string[];
};

const move = keyframes`
0% {
    
    transform: translateY(0%);
  }
20% {
    
    transform: translateY(10px);
  }
50% {
    
    transform: translateY(0%);
  }
 80% {
    
    transform: translateY(-10px)
  }
100% {
    
    transform: translateY(0%);
  }
`;

const UpAndDown = styled.div<{ size?: string }>`
  width: 100vw;
  height: 100vh;
  max-width: ${({ size = "100px" }) => size};
  max-height: ${({ size = "100px" }) => size};
  animation: ${move} 5s linear infinite;
  animation-direction: alternate;
`;
const ArrowIcon = styled(ArrowDown)<{ direction?: string }>`
  width: 100%;
  height: 100%;
  transform: ${({ direction = "down" }) =>
    direction === "right"
      ? "rotate(-90deg)"
      : direction === "left"
      ? "rotate(90deg)"
      : direction === "up"
      ? "rotate(180deg)"
      : ""};
`;

const Arrow: React.FC<{
  direction?: string;
  size?: string;
  style?: any;
  onClick?: () => void;
}> = ({ direction, size, ...props }) => (
  <UpAndDown size={size} {...props}>
    <ArrowIcon direction={direction} />
  </UpAndDown>
);

export default Arrow;
