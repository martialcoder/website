import React from "react";
import App from "../App";
import Checkpoints, { useCheckpoints } from "./Checkpoints";
import Section from "./Section";
import { getRandomColors } from "../styles/colors";

const sections = getRandomColors(5);

const CustomSecion = () => {
  const { state } = useCheckpoints();
  return;
};

export default (
  <Checkpoints color="red">
    {sections.map((color, i) => (
      <Section id={`section_${i}`} key={i} color={color} spacing="20px 10px">
        <App />
      </Section>
    ))}
  </Checkpoints>
);
