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

const Ripple = styled.button<PropsTypes>`
  border: none;
  border-radius: 2px;
  padding: 12px 18px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #2196f3;
  box-shadow: 0 0 4px #999;
  outline: none;
  background-position: center;
  transition: background 0.8s;
  &::after {
    display: block;
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);

    width: 100px;
    height: 100px;
    margin-top: -50px;
    margin-left: -50px;

    /* Center the ripple */
    top: 50%;
    left: 50%;

    animation: ${ripple} ease-out 1s infinite;
    opacity: 0;
  }
`;

export default Ripple;
