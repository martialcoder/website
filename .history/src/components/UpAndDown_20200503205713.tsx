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
    
    transform: translateY(10%);
  }
 to {
    
    transform: translateY(-15%)
  }
`;

const UpAndDown = styled.div<PropsTypes>`
  animation: ${move} 5s ease infinite;
`;

export default UpAndDown;
