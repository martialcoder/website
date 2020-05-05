import React from "react";
import SEO from "../components/SEO";
import Contact from "../components/Home/Contact";
import Landing from "../components/Home/Landing";
import Info from "../components/Home/Info";
import Services from "../components/Home/Services";
import { useScroll } from "../components/Animated/Scroll";

export default () => {
  const { scrollTo } = useScroll();
  console.log(scrollTo);
  return (
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
};
