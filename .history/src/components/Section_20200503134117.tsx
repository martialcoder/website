import styled from "@emotion/styled";

type PropsTypes = {
  image?: string;
  color?: string;
  spacing?: string | number;
};

const Section = styled.div<PropsTypes>`
  width: 100%;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  padding: ${({ spacing = "0" }) =>
    typeof spacing === "number" ? `${spacing.toFixed(0)}px` : spacing};
  background-color: ${({ color = "transparent" }) => color};
  background-image: ${({ image = "none" }) => image};
  &,
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;

export default Section;
