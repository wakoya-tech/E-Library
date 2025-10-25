import {FaStar} from 'react-icons/fa'
import './style.css';
export default function StarRating(noOfStars=5){
  
     const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);
  
  return <div className="star-rating">
    {
[...Array(noOfStars)].map((_,index)= > {
 

    function handleClick(getCurrentIndex) {
        
    }
    return <FaStar
    key={index}
    onClick={}
    onMouseMove={}
    onMouseLeave={}
    size={40}
    />
})
}
    </div>
}