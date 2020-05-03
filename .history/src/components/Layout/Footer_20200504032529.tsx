import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  background-color: #333;
`;

const IconsLicense = () => (
  <div>
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
    <>
      <IconsLicense />
    </>
  );
}
