import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(copyMultiple);
  }
  return (
    <>
      <div className="flex justify-center align-justify bg-purple-600 font-roboto text-sm">
        <div className=" basis-5/6">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="">
                <div
                  className="flex align-middle m-5 justify-between  bg-cyan-500 rounded-lg p-1 cursor-zoom-in"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                >
                  <h3 className="">{dataItem.question}</h3>
                  <span> + </span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="flex align-middle m-5 justify-between p-1 max-w-[90%] pl-5">
                        {dataItem.answer}
                      </div>
                    )
                  : selected === dataItem.id && (
                      <div className="flex align-middle m-5 justify-between p-1 max-w-[90%] pl-5">
                        {dataItem.answer}
                      </div>
                    )}
              </div>
            ))
          ) : (
            <div>no data found!</div>
          )}
        </div>
      </div>
      <div className="font-roboto text-sm flex  justify-center">
        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className="bg-cyan-500 rounded-2xl p-1 px-3 mt-1 shadow-2xl shadow-blue-600/100   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          enable it and check the answers
        </button>
      </div>
    </>
  );
}
