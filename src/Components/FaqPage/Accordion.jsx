import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./accordion.scss";

function Accordion(props) {
  const { title, content } = props;
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const contentDiv = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${contentDiv.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title m-0">{title}</p>
        <Chevron className={`${setRotate}`} width={8} fill={"#777"} />
      </button>
      <div
        ref={contentDiv}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
