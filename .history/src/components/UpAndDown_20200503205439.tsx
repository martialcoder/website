import { rgba } from "polished";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

type PropsTypes = {
  delay?: string;
  duration?: string;
  size?: number;
  colors?: string[];
};

const move = keyframes`
 from {
    
    transform: translateY(-5%)
  }
  to {
    
    transform: translateY(5%);
  }
`;

const UpAndDown = styled.div<PropsTypes>`
  animation: ${move} 15s ease-in-out infinite;
`;

export default UpAndDown;
