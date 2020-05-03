import React from "react";
import Section from "../Layout/Section";
import Base from "../Layout/Base";
import { keyframes } from "@emotion/core";
import { COLORS } from "../../styles/colors";
import BackgroundImage from "../BackgroundImage";
import { MartialCoder, SOURCES } from "../../styles/icons";
import GradientWave from "../Animated/GradientWave";
import styled from "@emotion/styled";

const FormContainer = styled.div`
  position: relative;
  width: 500px;
  background: #80c64a;
  background: linear-gradient(45deg, ${COLORS.blueIzis}, ${COLORS.cerise});
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  padding: 72px 55px 65px 55px;
  color: white;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Input = styled.input`
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  width: 100%;
  transition: border-bottom-color ease 400ms;
  padding: 1rem 0.5rem;
  font-size: 1rem;
  &:focus {
    border-bottom-color: rgba(255, 255, 255, 1) !important;
  }
`;

const fadeIn = keyframes`
 from { opacity: 0 }
 to{ opacity: 1 }
`;

const Subtitle = styled.h1`
  font-weight: lighter;
  position: absolute;
  bottom: 4rem;
  width: 100%;
  text-align: center;
`;
const BrandContainer = styled.div`
  position: relative;
  path:nth-of-type(1) {
    fill: black;
  }
  path:nth-of-type(2) {
    fill: white;
    animation: ${fadeIn} ease 10s;
  }
`;

export default () => (
  <Section
    color={COLORS.serenity}
    spacing="20px 10px"
    style={{ alignItems: "center", justifyContent: "center" }}
  >
    <GradientWave colors={["black", COLORS.curiousBlue]} />
    <BackgroundImage
      url={SOURCES.hills}
      style={{ backgroundPositionY: "20vh", backgroundPositionX: "50%" }}
    />
    <FormContainer className="wrap-contact3">
      <h1>Flick me a message</h1>
      <Input placeholder="Name" />
      <form className="contact3-form validate-form">
        <div className="wrap-contact3-form-radio">
          <div className="contact3-form-radio m-r-42">
            <input
              className="input-radio3"
              id="radio1"
              type="radio"
              name="choice"
              value="say-hi"
            />
            <label className="label-radio3">Say Hi</label>
          </div>
          <div className="contact3-form-radio">
            <input
              className="input-radio3"
              id="radio2"
              type="radio"
              name="choice"
              value="get-quote"
            />
            <label className="label-radio3">Get a Quote</label>
          </div>
        </div>
        <div
          className="wrap-input3 validate-input"
          data-validate="Name is required"
        >
          <input
            className="input3"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <span className="focus-input3"></span>
        </div>
        <div
          className="wrap-input3 validate-input"
          data-validate="Valid email is required: ex@abc.xyz"
        >
          <input
            className="input3"
            type="text"
            name="email"
            placeholder="Your Email "
          />
          <span className="focus-input3"></span>
        </div>
        <div className="wrap-input3 input3-select">
          <div>
            <select
              className="selection-2 select2-hidden-accessible"
              name="service"
              aria-hidden="true"
            >
              <option>Needed Services</option>
              <option>eCommerce Bussiness</option>
              <option>UI/UX Design</option>
              <option>Online Services</option>
            </select>
            <span
              className="select2 select2-container select2-container--default"
              dir="ltr"
            >
              <span className="selection">
                <span
                  className="select2-selection select2-selection--single"
                  role="combobox"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-labelledby="select2-service-0b-container"
                >
                  <span
                    className="select2-selection__rendered"
                    id="select2-service-0b-container"
                    title="Needed Services"
                  >
                    Needed Services
                  </span>
                  <span
                    className="select2-selection__arrow"
                    role="presentation"
                  >
                    <b role="presentation"></b>
                  </span>
                </span>
              </span>
              <span className="dropdown-wrapper" aria-hidden="true"></span>
            </span>
          </div>
          <span className="focus-input3"></span>
        </div>
        <div className="wrap-input3 input3-select">
          <div>
            <select
              className="selection-2 select2-hidden-accessible"
              name="budget"
              aria-hidden="true"
            >
              <option>Budget</option>
              <option>1500 $</option>
              <option>2000 $</option>
              <option>3000 $</option>
            </select>
            <span
              className="select2 select2-container select2-container--default"
              dir="ltr"
            >
              <span className="selection">
                <span
                  className="select2-selection select2-selection--single"
                  role="combobox"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-labelledby="select2-budget-qp-container"
                >
                  <span
                    className="select2-selection__rendered"
                    id="select2-budget-qp-container"
                    title="Budget"
                  >
                    Budget
                  </span>
                  <span
                    className="select2-selection__arrow"
                    role="presentation"
                  >
                    <b role="presentation"></b>
                  </span>
                </span>
              </span>
              <span className="dropdown-wrapper" aria-hidden="true"></span>
            </span>
          </div>
          <span className="focus-input3"></span>
        </div>
        <div
          className="wrap-input3 validate-input"
          data-validate="Message is required"
        >
          <textarea
            className="input3"
            name="message"
            placeholder="Your Message"
          ></textarea>
          <span className="focus-input3"></span>
        </div>
        <div className="container-contact3-form-btn">
          <button className="contact3-form-btn">Submit</button>
        </div>
      </form>
    </FormContainer>
  </Section>
);
