import { rgba } from "polished";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

type PropsTypes = {
  size?: number;
  color?: string;
};

const ripple = keyframes`
 from {
    opacity: 1;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(10);
  }
`;

const Ripple = styled.div<PropsTypes>`
  position: relative;
  flex: 1;
  height: 100%;
  width: 100%;
  &::after {
    display: block;
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: ${({ color = "white" }) => rgba(color, 0.3)};
    border: 1px solid ${({ color = "white" }) => rgba(color, 0.6)};
    opacity: 0;
    width: ${({ size = 50 }) => size}px;
    height: ${({ size = 50 }) => size}px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation: ${ripple} ease-out 2s infinite;
  }
`;

export default Ripple;
