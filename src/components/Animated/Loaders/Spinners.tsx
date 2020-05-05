import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import { darken, invert, grayscale, complement, rgba } from "polished";

const grey = rgba(0, 0, 0, 0.5);
const blue = rgba(255, 255, 255, 0.5);
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const rotate2 = keyframes`
  0% {
		transform: rotate(0deg);
		border-top-color: ${grey};
	}
	50% {
		transform: rotate(180deg);
		border-top-color: ${blue};
	}
	100% {
		transform: rotate(360deg);
		border-top-color: ${grey};
	}
`;

const SpinnerBase = styled.div`
  position: relative;
  margin: 75px auto;
  width: 150px;
  height: 150px;
  display: block;
  overflow: hidden;
  border-radius: 50%;
  padding: 8px;
  border: 2px solid transparent;
  animation: ${rotate} linear 3.5s infinite;
  i {
    display: block;
    height: 100%;
  }
`;

export const Spinner1 = styled(SpinnerBase)`
  &,
  i {
    border-radius: 50%;
    padding: 8px;
    border: 2px solid transparent;
    animation: ${rotate2} linear 3.5s infinite;
    border-top-color: ${grey};
    border-bottom-color: ${blue};
  }
`;
