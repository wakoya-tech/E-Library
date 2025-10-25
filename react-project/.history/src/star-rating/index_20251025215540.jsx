import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        const currentIndex = index + 1;

        function handleClick(getCurrentIndex) {
          setRating(getCurrentIndex);
        }

        function handleMouseEnter(getCurrentId) {
          setHover(getCurrentId);
        }

        function handleMouseLeave() {
          setHover(rating);
        }

        return (
          <FaStar
            key={currentIndex}
            size={40}
            onClick={() => handleClick(currentIndex)}
            onMouseEnter={() => handleMouseEnter(currentIndex)}
            onMouseLeave={handleMouseLeave}
            color={currentIndex <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
          />
        );
      })}
    </div>
  );
}
