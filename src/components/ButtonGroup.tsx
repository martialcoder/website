import React, { useState } from "react";
import styled from "@emotion/styled";
import { rgba } from "polished";

const Button = styled.a<{
  color?: string;
  accentColor?: string;
  delay?: string;
  animated?: boolean;
}>`
  cursor: pointer;
  position: relative;
  display: block;
  margin: 0;
  flex: 1;
  padding: 0.35em;
  border-radius: 0;
  border: 0.1em solid ${({ color = "white" }) => color};
  text-decoration: none;
  font-weight: bold;
  color: ${({ color = "white" }) => color};
  text-align: center;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    color: ${({ accentColor = "#333" }) => rgba(accentColor, 0.8)};
    background-color: ${({ color = "white" }) => rgba(color, 0.8)};
  }
  &:active,
  &.active {
    color: ${({ accentColor = "#333" }) => accentColor};
    background-color: ${({ color = "white" }) => color};
  }
  @media all and (max-width: 30em) {
    display: block;
  }
  &:before {
    display: none;
  }
  &:after {
    display: none;
  }
`;

const Group = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-radius: 0.12em;
  overflow: hidden;
  @media all and (max-width: 30em) {
    display: block;
  }
`;

const SelectorGroup: React.FC<{
  options: string[];
  active?: string;
  onChange?: (active: string) => void;
}> = ({ options, active, onChange }) => {
  const [selected, setSelected] = useState(active || options[0]);
  return (
    <Group>
      {options.map((option) => (
        <Button
          className={option === selected ? "active" : ""}
          key={option}
          onClick={() => {
            setSelected(option);
            onChange && onChange(option);
          }}
        >
          {option}
        </Button>
      ))}
    </Group>
  );
};

export default SelectorGroup;
