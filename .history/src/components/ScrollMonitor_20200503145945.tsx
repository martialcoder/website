import React from "react";

import { useScroll } from "react-use-gesture";

export defa function ScrollMonitor(props) {
  const bind = useScroll((...args) => {
    console.log(args);
  });

  return <div {...props} {...bind()} />;
}


