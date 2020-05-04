import React from "react";
import SEO from "../components/SEO";
import Contact from "../components/Home/Contact";
import Landing from "../components/Home/Landing";
import Info from "../components/Home/Info";
import Services from "../components/Home/Services";

export default () => (
  <>
    <SEO
      title="martialCoder ~ Home"
      description="Finding a way to good development."
    />
    <Landing />
    <Info />
    <Services />
    <Contact />
  </>
);
