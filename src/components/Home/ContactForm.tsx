import React, { useState, useRef, useCallback } from "react";
import { COLORS } from "../../styles/colors";
import ButtonGroup from "../ButtonGroup";
import Button from "../Button";
import styled from "@emotion/styled";
import {
  attributes,
  react as ContactTitle,
} from "../../content/home/contact-form.md";
import { Spinner1 } from "../Animated/Loaders/Spinners";
import { Success } from "../Animated/Loaders/Success";

const Label = styled.label`
  font-weight: lighter;
  display: inline-block;
  margin-bottom: 1rem;
  text-align: right;
  width: 100%;
`;
const FormContainer = styled.form`
  position: relative;
  width: 100%;
  max-width: 400px;
  background: #80c64a;
  background: linear-gradient(45deg, ${COLORS.blueIzis}, ${COLORS.cerise});
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  overflow: hidden;
  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    color: rgba(255, 255, 255, 0.4);
  }
  &:focus {
    border-bottom-color: rgba(255, 255, 255, 1);
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
  color: white;
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
  &:focus {
    border-bottom-color: rgba(255, 255, 255, 1);
  }
`;

const Loading = () => (
  <div
    style={{
      position: "absolute",
      textAlign: "center",
      width: "100%",
      left: 0,
      top: 0,
    }}
  >
    <Spinner1>
      <i>
        <i>
          <i>
            <i>
              <i>
                <i>
                  <i></i>
                </i>
              </i>
            </i>
          </i>
        </i>
      </i>
    </Spinner1>
  </div>
);

enum StateTypes {
  ready,
  loading,
  success,
  error,
}

const useSubmit = ({
  onSubmit,
  values,
}: {
  onSubmit: (message: any) => Promise<void> | void;
  values: { subject: string; email: string; message: string };
}) => {
  const [state, setState] = useState(StateTypes.ready);
  const submit = useCallback(async () => {
    if (onSubmit) {
      try {
        setState(StateTypes.loading);
        await onSubmit(values);
        setState(StateTypes.success);
      } catch (e) {
        setState(StateTypes.error);
      }
    }
  }, [setState, values]);
  const reset = useCallback(() => {
    setState(StateTypes.ready);
  }, [setState]);

  return { submit, reset, state };
};

export default ({ onSubmit }: { onSubmit: (message: any) => void }) => {
  const size = useRef<{ width?: number; height?: number }>();
  const [subject, setSubject] = useState("Development");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { submit, state, reset } = useSubmit({
    onSubmit,
    values: { subject, email, message },
  });
  return (
    <FormContainer
      ref={(node) => {
        size.current = { width: node?.clientWidth, height: node?.clientHeight };
      }}
      onSubmit={submit}
      style={size.current && { height: `${size.current.height}px` }}
    >
      {state === StateTypes.success ? (
        <>
          <Success />
          <h3 style={{ textAlign: "center" }}>{attributes.thanks}</h3>
          <Button to="#" onClick={reset}>
            {attributes.reset}
          </Button>
        </>
      ) : state === StateTypes.loading ? (
        <Loading />
      ) : (
        <>
          <ContactTitle />
          <Label>Subject</Label>
          <ButtonGroup
            active={subject}
            options={attributes.subjects}
            onChange={setSubject}
          />
          <Label>Email</Label>
          <Input
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder={attributes.email}
          />
          <Label>Message</Label>
          <Message
            onChange={(ev) => setMessage(ev.target.value)}
            placeholder={attributes.message}
            rows={6}
          />
          <Button to="#" onClick={submit}>
            {attributes.button}
          </Button>
        </>
      )}
    </FormContainer>
  );
};
