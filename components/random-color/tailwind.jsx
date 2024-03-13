import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("HEX");
  const [color, setColor] = useState("#000000");
  function RandomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleRandomRgbColor() {
    const r = RandomColorUtility(256);
    const g = RandomColorUtility(256);
    const b = RandomColorUtility(256);
    setTypeOfColor("RGB");
    setColor(`(${r},${g},${b})`);
  }
  function handleRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  return (
    <div style={{ background: color, height: "100vh" }} className="mt-5">
      {" "}
      <div className="w-auto h-auto flex justify-around">
        <button
          onClick={() => handleRandomRgbColor()}
          className=" hover:animate-spin text-cyan-50 bg-orange-600 rounded-3xl px-2 mt-3 h-6 text-sm"
        >
          Generate RGB color{" "}
        </button>
        <button
          onClick={() => handleRandomHexColor()}
          className="text-cyan-50  bg-orange-600 rounded-3xl px-2 mt-3 h-6 text-sm hover:animate-spin"
        >
          Generate HEX color
        </button>
        <button
          onClick={() =>
            typeOfColor === "RGB" ? handleRandomRgbColor : handleRandomHexColor
          }
          className="text-cyan-50  bg-orange-600 rounded-3xl px-2 mt-3 h-6 text-sm hover:animate-spin"
        >
          Generate RANDOM color
        </button>
      </div>
      <div className="flex justify-around content-center">
        <h1 className="text-5xl mt-[50vh] text-cyan-50">{typeOfColor}</h1>
        <h1 className="text-5xl mt-[50vh] text-cyan-50">{color} </h1>
      </div>
    </div>
  );
}
