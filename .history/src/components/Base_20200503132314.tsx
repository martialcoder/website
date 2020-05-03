import React, { Component } from "react";
import styled from "@emotion/styled";

type PropsTypes = {
  color?: string;
};

const Base = styled.div<PropsTypes>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${({ color = "transparent" }) => color};
`;

export default Base;
