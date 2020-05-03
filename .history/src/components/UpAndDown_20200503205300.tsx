import { rgba } from "polished";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

type PropsTypes = {
  delay?: string;
  duration?: string;
  size?: number;
  colors?: string[];
};

const gradient = keyframes`
 from {
    
    transform: translateY(-50%)
  }
  to {
    
    transform: translateY(-50%);
  }
`;

const Gradient = styled.div<PropsTypes>`
  position: absolute;
  z-index: 0;
  flex: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  background: ${({ colors = ["#333", "#DDD"] }) =>
    `linear-gradient(-45deg, ${colors.join(",")})`};
  background-size: 400% 400%;
  animation: ${gradient} 15s ease-in-out infinite;
`;

export default Gradient;
