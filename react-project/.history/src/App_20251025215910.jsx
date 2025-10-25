import './App.css';
import RandomColor from "./random-Color";

import StarRating from './star-rating';
function App() {
  return (
    <div>
      <RandomColor />
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
