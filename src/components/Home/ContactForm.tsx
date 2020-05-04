import React from "react";
import { COLORS } from "../../styles/colors";
import Button from "../Button";
import styled from "@emotion/styled";
import {
  attributes,
  react as ContactTitle,
} from "../../content/home/contact-form.md";

const FormContainer = styled.div`
  position: relative;
  max-width: 400px;
  background: #80c64a;
  background: linear-gradient(45deg, ${COLORS.blueIzis}, ${COLORS.cerise});
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  overflow: hidden;
  padding: 2rem;
  color: white;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Input = styled.input`
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  width: 100%;
  transition: border-bottom-color ease 400ms;
  padding: 0.5rem 0.5rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  color: white;
  &::placeholder {
    color: white;
  }
  &:focus {
    border-bottom-color: rgba(255, 255, 255, 1) !important;
  }
`;
const Message = styled.textarea`
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  width: 100%;
  transition: border-bottom-color ease 400ms;
  padding: 0.5rem 0.5rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  resize: none;
  &::placeholder {
    color: white;
  }
  &:focus {
    border-bottom-color: rgba(255, 255, 255, 1) !important;
  }
`;

export default () => (
  <FormContainer>
    <ContactTitle />
    <Input placeholder={attributes.labels.name} />
    <Input placeholder={attributes.labels.email} />
    <Message placeholder={attributes.labels.message} rows={6} />
    <Button>{attributes.labels.button}</Button>
  </FormContainer>
);
