import React, { useEffect } from "react";
import App from "../App";
import Checkpoints, { useCheckpoints } from "./Checkpoints";
import Section from "./Section";
import { getRandomColors } from "../styles/colors";

const sections = getRandomColors(5);

const CustomSection: React.FC = ({ id, ...props }) => {
  const { state } = useCheckpoints();
  console.log(state);
  useEffect(() => {
    if (state.active && state.active.id === id) console.log("active", id);
  }, [state.active]);
  return <Section id={id} {...props} />;
};

export default (
  <Checkpoints color="red">
    {sections.map((color, i) => (
      <CustomSection
        id={`section_${i}`}
        key={i}
        color={color}
        spacing="20px 10px"
      >
        <App />
      </CustomSection>
    ))}
  </Checkpoints>
);
