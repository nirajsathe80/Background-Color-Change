import { useState } from "react";
import AccordionArray from "../data";

const Accordion = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center w-full p-10">
      <h1 className="text-3xl font-serif font-bold">FAQs</h1>
      <div className="w-[70vw] bg-gray-700 p-5 my-6 rounded-lg">
        {AccordionArray.map((data) => {
          const { title, id, children } = data;
          const isOpen = isAccordionOpen === id;
          return (
            <div key={id} className="text-white bg-red-300 p-5 my-4 rounded-lg">
              <button
                className="flex justify-between  text-2xl cursor-pointer w-full"
                onClick={() => {
                  setIsAccordionOpen((prev) => (prev === id ? null : id));
                }}
              >
                <p>{title}</p>
                <p>{isOpen ? "-" : "+"}</p>
              </button>
              {isOpen ? <p className="text-base my-3">{children}</p> : <></>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
