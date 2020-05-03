import React from "react";
import styled from "@emotion/styled";

type PropsTypes = { name: string };

const Icon = styled.i`
  width: 100px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const CustomIcons: React.FC<PropsTypes> = ({ name }) => (
  <Icon className={`icon ${name}`} />
);

export default CustomIcons;
