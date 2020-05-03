import React from "react";
import styled from "@emotion/styled";

type PropsTypes = { name: string };

const Icon = styled.i`
  width: ${({ size = 50 }) => size}px;
  height: ${({ size = 50 }) => size}px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const CustomIcons: React.FC<PropsTypes> = ({ name }) => (
  <Icon className={`icon ${name}`} />
);

export default CustomIcons;
