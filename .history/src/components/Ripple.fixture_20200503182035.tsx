import React from "react";
import Ripple from "./Ripple";
import App from "../App";
import Base from "./Base";

export default (
  <Base color="red" spacing="20px 10px">
    <Ripple color="green" size={100} delay="100ms"></Ripple>
    <Ripple color="green" delay="600ms"></Ripple>
    <Ripple color="green" size={200}></Ripple>
  </Base>
);
