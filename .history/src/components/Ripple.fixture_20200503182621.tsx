import React from "react";
import Ripple from "./Ripple";
import App from "../App";
import Base from "./Base";

export default (
  <Base color="red" spacing="20px 10px">
    <Ripple delay=".2s" duration="2s"></Ripple>
    <Ripple delay=".3s" duration="3s" size={200}></Ripple>
    <Ripple delay=".4s" duration="4s" size={400}></Ripple>
  </Base>
);
