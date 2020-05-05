import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { attributes, react as Licenses } from "../../content/footer.md";
import Button from "../Button";
import { GitHub, LinkedIn } from "../../styles/icons";
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
  .actions {
    display: flex;
    padding: 2rem;
  }
  .social {
    flex: 1;
    font-size: 1.3rem;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .content {
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    &-btn {
      font-size: 1.3rem;
      padding: 1rem 2rem;
    }
  }
  .icons {
    margin-left: 1rem;
    svg {
      cursor: pointer;
      margin: 0 0.51rem;
      fill: white;
    }
  }
`;

export default function Footer() {
  return (
    <Container>
      <div className="actions">
        <div className="content">
          <Button to="/content" className="content-btn">
            {attributes.button} >
          </Button>
        </div>
        <div className="social">
          <p>
            <em>{attributes.find_me}:</em>
          </p>
          <div className="icons">
            <a href="https://github.com/Thram" target="_black">
              <GitHub />
            </a>
            <a href="https://www.linkedin.com/in/thram/" target="_black">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
      <Licenses />
    </Container>
  );
}
