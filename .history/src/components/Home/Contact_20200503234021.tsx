import React from "react";
import Section from "../Layout/Section";
import Base from "../Layout/Base";
import BackgroundImage from "../BackgroundImage";
import { keyframes } from "@emotion/core";
import { COLORS } from "../../styles/colors";
import { MartialCoder, SOURCES } from "../../styles/icons";
import GradientWave from "../Animated/GradientWave";
import styled from "@emotion/styled";

const LogoContainer = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
    style={{ alignItems: "center" }}
  >
    <GradientWave colors={["black", COLORS.curiousBlue]} />
    <BackgroundImage url={SOURCES.hills} />
    <h1>Flick me a message</h1>
    <div class="wrap-contact3">
<form class="contact3-form validate-form">
<span class="contact3-form-title">
Contact Us
</span>
<div class="wrap-contact3-form-radio">
<div class="contact3-form-radio m-r-42">
<input class="input-radio3" id="radio1" type="radio" name="choice" value="say-hi" checked="checked">
<label class="label-radio3" for="radio1">
Say Hi
</label>
</div>
<div class="contact3-form-radio">
<input class="input-radio3" id="radio2" type="radio" name="choice" value="get-quote">
<label class="label-radio3" for="radio2">
Get a Quote
</label>
</div>
</div>
<div class="wrap-input3 validate-input" data-validate="Name is required">
<input class="input3" type="text" name="name" placeholder="Your Name">
<span class="focus-input3"></span>
</div>
<div class="wrap-input3 validate-input" data-validate="Valid email is required: ex@abc.xyz">
<input class="input3" type="text" name="email" placeholder="Your Email">
<span class="focus-input3"></span>
</div>
<div class="wrap-input3 input3-select">
<div>
<select class="selection-2 select2-hidden-accessible" name="service" tabindex="-1" aria-hidden="true">
<option>Needed Services</option>
<option>eCommerce Bussiness</option>
<option>UI/UX Design</option>
<option>Online Services</option>
</select><span class="select2 select2-container select2-container--default" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-service-0b-container"><span class="select2-selection__rendered" id="select2-service-0b-container" title="Needed Services">Needed Services</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
</div>
<span class="focus-input3"></span>
</div>
<div class="wrap-input3 input3-select">
<div>
<select class="selection-2 select2-hidden-accessible" name="budget" tabindex="-1" aria-hidden="true">
<option>Budget</option>
<option>1500 $</option>
<option>2000 $</option>
<option>3000 $</option>
</select><span class="select2 select2-container select2-container--default" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-budget-qp-container"><span class="select2-selection__rendered" id="select2-budget-qp-container" title="Budget">Budget</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
</div>
<span class="focus-input3"></span>
</div>
<div class="wrap-input3 validate-input" data-validate="Message is required">
<textarea class="input3" name="message" placeholder="Your Message"></textarea>
<span class="focus-input3"></span>
</div>
<div class="container-contact3-form-btn">
<button class="contact3-form-btn">
Submit
</button>
</div>
</form>
</div>
  </Section>
);
