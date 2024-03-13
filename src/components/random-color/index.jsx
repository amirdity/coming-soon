import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function handleRandomRgbColor() {}
  function handleRandomHexColor() {}
  return (
    <div
      style={{ background: color, width: " 100vw", height: "100vh" }}
      className="mt-5"
    >
      {" "}
      <div className="w-auto h-auto flex justify-around">
        <button
          onClick={() => setTypeOfColor("rgb")}
          className=" hover:animate-spin text-cyan-50 bg-orange-600 rounded-3xl px-2 mt-3 h-6 text-sm"
        >
          Generate RGB color{" "}
        </button>
        <button
          onClick={() => setTypeOfColor("hex")}
          className="text-cyan-50  bg-orange-600 rounded-3xl px-2 mt-3 h-6 text-sm hover:animate-spin"
        >
          Generate HEX color
        </button>
        <button
          onClick={() =>
            typeOfColor === "hex"
              ? handleRandomRgbColor()
              : handleRandomHexColor()
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
