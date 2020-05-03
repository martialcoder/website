import React from "react";
import Ripple from "./Ripple";
import App from "../../App";
import Base from "../Layout/Base";

export default (
  <Base color="red" spacing="20px 10px">
    <Ripple delay=".2s" duration="2s"></Ripple>
    <Ripple delay=".3s" duration="3s" size={100}></Ripple>
    <Ripple delay=".4s" duration="4s" size={200}></Ripple>
    <Ripple delay=".5s" duration="5s" size={500}></Ripple>
  </Base>
);
