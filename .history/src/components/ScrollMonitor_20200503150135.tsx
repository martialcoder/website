import React from "react";

import { useScroll } from "react-use-gesture";

export default function ScrollMonitor(props) {
  const bind = useScroll((state) => {
    console.log(state.lastOffset);
  });

  return <div {...props} {...bind()} />;
}
