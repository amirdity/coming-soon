import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId);
  }
  return (
    <div className="">
      <div className="">
        {data && data.length > 0 ? (
          <div>
            {data.map((getItem) => (
              <div>
                <h3>{getItem.question} </h3> <span>+</span>
              </div>
            ))}
          </div>
        ) : (
          <p>no data found</p>
        )}

        {/*  {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="">
              <div
                className=""
                onClick={() => handleSingleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? <div>{dataItem.answer}</div> : null}
            </div>
          ))
        ) : (
          <div>no data found!</div>
        )}   */}
      </div>
    </div>
  );
}
