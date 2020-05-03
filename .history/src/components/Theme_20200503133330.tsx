import styled from "@emotion/styled";

type PropsTypes = {
  color?: string;
  spacing?: string | number;
};

const Base = styled.div<PropsTypes>`
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Ubuntu, sans-serif;
  }
`;

export default Base;
