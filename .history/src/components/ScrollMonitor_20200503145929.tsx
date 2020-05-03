import React from "react";

import { useScroll } from "react-use-gesture";

function ScrollMonitor(props) {
  const bind = useScroll((...args) => {
    console.log(args);
  });

  return <div {...props} {...bind()} />;
}
