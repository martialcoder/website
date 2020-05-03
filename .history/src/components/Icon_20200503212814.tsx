import React from "react";
import styled from "@emotion/styled";

type PropsTypes = {
  name: string;
  size?: number;
  width?: number;
  height?: number;
};

const Icon = styled.i<{ size?: number; width?: number; height?: number }>`
  position: relative;
  display: block;
  width: ${({ size = 50, width }) => width || size}px;
  height: ${({ size = 50, height }) => height || size}px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const CustomIcons: React.FC<PropsTypes> = ({ name, size, ...props }) => (
  <Icon className={`icon ${name}`} size={size} {...props} />
);

export default CustomIcons;
