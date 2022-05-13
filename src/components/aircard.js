import React from "react"
import mountainBike from '../assets/mountain-bike.png';
import StarIcon from '@mui/icons-material/Star';
import '../assets/airbnb.css'
export default function Aircard(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {
                badgeText &&
                <div className="card--badge">{badgeText}</div>
            }
            <img
                src={mountainBike} alt="wedding-photography"
                className="card--image"
            />
           
            <div className="card--stats">
            <StarIcon className="star" />
            <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}