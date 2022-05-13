import React from "react";
import Airnavbar from "./airnavbar";
import Gridphoto from "./gridphoto";
import Aircard from "./aircard";
import data from "../data/data";

export default function AirLayout() {
    const cards = data.map(item => {
        return (
            <Aircard
                key={item.id}
                {...item}
                
            />
        )
    })        
    
    return (
        <div>
            <Airnavbar />
            <Gridphoto />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}