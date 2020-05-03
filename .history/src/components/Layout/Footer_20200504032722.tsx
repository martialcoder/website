import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  background-color: #333;
  color: white;
  font-weight: lighter;
  font-size: 0.8rem;
  .licence {
    padding: 0.2rem 0.4rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

const IconsLicense = () => (
  <div className="licence">
    Icons made by{" "}
    <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">
      Flat Icons
    </a>{" "}
    from{" "}
    <a href="https://www.flaticon.com/" title="Flaticon">
      www.flaticon.com
    </a>
  </div>
);

export default function Licenses() {
  return (
    <Container>
      <IconsLicense />
    </Container>
  );
}
