import { useState, useEffect } from "react";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const getHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

const getWindosSize = () => ({ width: getWidth(), height: getHeight() });

export const useWindowSize = () => {
  let [size, setSize] = useState(getWindosSize());
  useEffect(() => {
    const resizeListener = () => setSize(getWindosSize());
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return size;
};
