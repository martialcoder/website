import React from "react";
import Ripple from "./Ripple";
import App from "../App";
import Base from "./Base";

export default (
  <Base color="red" spacing="20px 10px">
    <Ripple size={100} delay="100ms"></Ripple>
    <Ripple delay="600ms"></Ripple>
    <Ripple size={200}></Ripple>
  </Base>
);
