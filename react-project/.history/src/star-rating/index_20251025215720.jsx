import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        const index = index + 1;

        function handleClick(getCurrentIndex) {
     console.log(getCurrentIndex);
        }

        function handleMouseEnter(getCurrentId) {
            console.log(getCurrentIndex);
        }

        function handleMouseLeave() {
            console.log(getCurrentIndex);
        }

        return (
          <FaStar
            key={currentIndex}
            size={40}
            onClick={() => handleClick(currentIndex)}
            onMouseEnter={() => handleMouseEnter(currentIndex)}
            onMouseLeave={handleMouseLeave}

          />
        );
      })}
    </div>
  );
}
