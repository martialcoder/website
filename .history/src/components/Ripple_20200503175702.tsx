import styled from "@emotion/styled";

type PropsTypes = {
  image?: string;
  color?: string;
  spacing?: string | number;
};

const Section = styled.div<PropsTypes>`
  &:active {
    background-color: #6eb9f7;
    background-size: 100%;
    transition: background 0s;
  }
  &:hover {
    background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
      center/15000%;
  }
`;

export default Section;
