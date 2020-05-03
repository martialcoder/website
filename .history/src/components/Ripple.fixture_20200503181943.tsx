import React from "react";
import Ripple from "./Ripple";
import App from "../App";
import Base from "./Base";

export default (
  <Base color="red" spacing="20px 10px">
    <Ripple color="green" size={100} delay="100"></Ripple>
    <Ripple color="green"></Ripple>
    <Ripple color="green"></Ripple>
  </Base>
);
