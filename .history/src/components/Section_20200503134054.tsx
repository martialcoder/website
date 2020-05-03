import styled from "@emotion/styled";

type PropsTypes = {
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
  &,
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;

export default Section;
