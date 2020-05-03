import React from "react";
import styled from "@emotion/styled";

type PropsTypes = { name: string };

const Icon = styled.i``;

const CustomIcons: React.FC<PropsTypes> = ({ name }) => (
  <Icon className={`icon ${name}`} />
);

export default CustomIcons;
