import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
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
      <div>
        <div>
          {data.length > 0
            ? data.map((getItem) => (
                <div
                  onClick={
                    enableMultiSelection
                      ? handleMultiSelection(getItem.Id)
                      : handleSingleSelection(getItem.Id)
                  }
                >
                  {getItem.question}{" "}
                  <div>
                    {enableMultiSelection
                      ? multiple.indexOf(getItem.id) !== -1 && (
                          <div>{getItem.answer} </div>
                        )
                      : selected === getItem.id && <div>{getItem.answer} </div>}
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
      <div>
        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className=""
        >
          enable this to see what will be happen
        </button>
      </div>
    </>
  );
}
