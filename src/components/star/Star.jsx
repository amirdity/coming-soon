import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Star({ noOfStart = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(currentIndex) {
    setRating(currentIndex);
  }
  function handleMouseMove(currentIndex) {
    setHover(currentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="flex flex-row justify-center">
      {[...Array((noOfStart = 10))].map((_, index) => {
        index++;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "text-yellow-500" : ""}
            size={60}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        );
      })}
    </div>
  );
}
