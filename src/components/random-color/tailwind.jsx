import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    // #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      className="mt-5"
      style={{
        height: "100vh",
        background: color,
      }}
    >
      {" "}
      <div className="w-auto h-auto flex justify-around">
        <button
          className=" hover:animate-spin text-cyan-50 bg-orange-600 rounded-3xl px-2 mt-3 h-6 text-sm"
          onClick={() => setTypeOfColor("hex")}
        >
          Create HEX Color
        </button>
        <button
          className=" hover:animate-spin text-cyan-50 bg-orange-600 rounded-3xl px-2 mt-3 h-6 text-sm"
          onClick={() => setTypeOfColor("rgb")}
        >
          Create RGB Color
        </button>
        <button
          className=" hover:animate-spin text-cyan-50 bg-orange-600 rounded-3xl px-2 mt-3 h-6 text-sm"
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="flex justify-around content-center">
        <h3 className="text-5xl mt-[50vh] text-cyan-50">{typeOfColor}</h3>
        <h1 className="text-5xl mt-[50vh] text-cyan-50">{color}</h1>
      </div>
    </div>
  );
}
