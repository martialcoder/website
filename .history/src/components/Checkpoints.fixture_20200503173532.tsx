import React, { useEffect } from "react";
import App from "../App";
import Checkpoints, { useCheckpoints } from "./Checkpoints";
import Section from "./Section";
import { getRandomColors } from "../styles/colors";

const sections = getRandomColors(5);

const CustomSection = ({id,color, spacing}) => {
  const { state } = useCheckpoints();
  useEffect(()=>{
    if(state.active === id)
  }, state.active)
  return  <Section id={id} key={i} color={color} spacing={spacing}>
  <App />
</Section>
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
