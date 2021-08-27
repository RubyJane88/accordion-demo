import React, { useState, useRef, ReactNode } from "react";

import "./Accordion.css";
import ChevronIcon from "./ChevronIcon";

type Props = {
  children: ReactNode;
  title: string;
};

const Accordion = ({ children, title }: Props) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [verticalSpace, setVerticalSpace] = useState("0px");
  const [rotate, setRotate] = useState("accordion__icon");

  const content = useRef<any>(null);

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotate(
      active === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
    setVerticalSpace(active === "active" ? "0px" : "1rem 0 1rem 0");
  };

  return (
    <div className={`accordion__section`} style={{ margin: verticalSpace }}>
      <button className={`accordion ${active}`} onClick={toggleAccordion}>
        <p className="accordion__title">{title}</p>
        <ChevronIcon className={`${rotate}`} width={10} fill={"#3F51B5"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content_wrapper"
      >
        <div className="accordion__content">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
