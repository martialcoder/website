import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import { darken } from "polished";

const bouncy = keyframes`
  0%{top:0em}
   40%{top:0em}
   43%{top:-0.9em}
   46%{top:0em}
   48%{top:-0.4em}
   50%{top:0em}
   100%{top:0em;}
`;

const Button = styled.button`
  animation: ${bouncy} 5s infinite linear;
  position: relative;
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid ${({ color = "#ffffff" }) => color};
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: bold;
  color: ${({ color = "#ffffff" }) => color};
  text-align: center;
  transition: background-color 0.2s, color 0.2s;
  float: right;
  &:hover {
    color: ${({ color = "#ffffff" }) => darken(0.4, color)};
    background-color: ${({ color = "#ffffff" }) => color};
  }
  @media all and (max-width: 30em) {
    display: block;
    margin: 0.4em auto;
  }
`;

export default Button;
