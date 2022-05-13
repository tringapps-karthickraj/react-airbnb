import React from "react"
import photo from '../assets/grid_photo.png'
import '../assets/airbnb.css';

export default function Gridphoto() {
    return (
        <section className="photo-grid">
            <img src={photo} alt="Hero_photos" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}