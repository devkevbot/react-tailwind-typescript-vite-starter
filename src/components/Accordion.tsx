import React, { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

function Accordion({ title, children }: AccordionProps) {
  const [show, setShow] = useState(false);

  function onAccordionClick() {
    setShow((prev) => !prev);
  }

  return (
    <div className="border-2 border-gray-300 rounded-md">
      <div className="p-4 flex items-center justify-between border-2 border-b-gray-300">
        <h3>{title}</h3>
        <button onClick={() => onAccordionClick()}>
          {!show ? "Show" : "Hide"}
        </button>
      </div>
      {show && <div className="py-8 px-4">{children}</div>}
    </div>
  );
}

export default Accordion;
