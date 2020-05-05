import React, {
  createContext,
  useRef,
  useContext,
  useCallback,
  useState,
} from "react";
import Base from "../Layout/Base";

const Context = createContext<any>(null);

export const useScroll = () => {
  const node = useContext(Context);
  const scrollTo = useCallback(
    (anchor?: string) => {
      if (node) {
        const section = node.querySelector(`#${anchor}`);
        node.scrollTo({
          top: section ? section.offsetTop : 0,
          left: 0,
          behavior: "smooth",
        });
      }
    },
    [node]
  );
  return { scrollTo };
};

export default (props: any) => {
  const [node, setNode] = useState<HTMLDivElement | null>();
  return (
    <Context.Provider value={node}>
      <Base
        ref={(ref) => {
          console.log("set Base ref");
          setNode(ref);
        }}
        {...props}
      />
    </Context.Provider>
  );
};
