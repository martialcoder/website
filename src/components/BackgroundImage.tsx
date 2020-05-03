import styled from "@emotion/styled";

const BackgroundImage = styled.div<{ url: string }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position-y: 20vh;
  background-position-x: 50%;
`;

export default BackgroundImage;
