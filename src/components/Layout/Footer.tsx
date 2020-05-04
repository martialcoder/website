import React from "react";
import styled from "@emotion/styled";
import { react as Licenses } from "../../content/licenses.md";

const Container = styled.div`
  width: 100%;
  background-color: #333;
  color: white;
  font-weight: lighter;
  font-size: 0.8rem;
  .frontmatter-markdown {
    text-align: center;
    padding: 0.2rem 0.4rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <Container>
      <Licenses />
    </Container>
  );
}
