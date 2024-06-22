import { useEffect, useState } from "react";
import Colours from "../data";

const BackgroundColorChangeComponent = () => {
  const [currentBodyColor, setCurrentBodyColor] = useState("rgb(251 146 60)");

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = currentBodyColor;
  }, [currentBodyColor]);

  const handleBackgroundChange = (color) => {
    setCurrentBodyColor(color);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white p-3 rounded-lg flex justify-between flex-wrap gap-2 absolute w-[80vw] bottom-10">
        {Colours.map((color) => {
          const { label, value, textColor } = color;
          return (
            <button
              key={value}
              className={`py-2 px-3 xl:px-5 font-bold xl:text-xl text-sm w-max rounded-lg`}
              onClick={() => handleBackgroundChange(value)}
              style={{ backgroundColor: value, color: textColor }}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BackgroundColorChangeComponent;
