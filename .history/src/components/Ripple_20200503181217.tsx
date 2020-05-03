import { rgba } from "polished";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

type PropsTypes = {
  image?: string;
  color?: string;
  spacing?: string | number;
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
  &::after {
    display: block;
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: ${({ color = "white" }) => rgba(color, 0.3)};
    border: 1px solid ${({ color = "white" }) => rgba(color, 0.6)};
    opacity: 0;
    width: ${({ size = 50 }) => size}px;
    height: 50px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation: ${ripple} ease-out 2s infinite;
  }
`;

export default Ripple;
