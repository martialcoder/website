import React from "react";
import App from "../App";
import Base from "./Base";
import Section from "./Section";
import { getRandomColors } from "../styles/colors";

const sections = getRandomColors(5);

export default (
  <Base color="red">
    {sections.map((color, i) => (
      <Section id={`section_${i}`} key={i} color={color} spacing="20px 10px">
        <h1>test</h1>
        <div className="ying-yang-img"></div>
        <div className="cloud-img"></div>
        <div className="meditation-img"></div>
      </Section>
    ))}
  </Base>
);
