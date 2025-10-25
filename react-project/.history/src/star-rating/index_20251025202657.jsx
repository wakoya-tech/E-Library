import {FaStar} from 'react-icons/fa'
import './style.css';
export default function StarRating(noOfStars=5){
    return <div className="star-rating">
[...Array(noOfStars)].map((_,index)=>{
    return<
    FaStar
    key={index}
    onClick={}
    />
})
    </div>
}