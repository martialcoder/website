import React from "react";
import styled from "@emotion/styled";

type PropsTypes = { name: string; size?: number };

const Icon = styled.i<{ size?: number }>`
  width: ${({ size = 50 }) => size}px;
  height: ${({ size = 50 }) => size}px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const CustomIcons: React.FC<PropsTypes> = ({ name, size, ...props }) => (
  <Icon className={`icon ${name}`} size={size} {...props} />
);

export default CustomIcons;
