import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Star({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getIndex) {
    setRating(getIndex);
  }
  function handleMouseEnter(getIndex) {
    setHover(getIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="flex flex-row justify-center">
      {[...Array(noOfStars)].map((_, index) => {
        index++;
        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating) ? "text-yellow-500" : "text-slate-400"
            }
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={60}
          />
        );
      })}
    </div>
  );
}

export default Star;
