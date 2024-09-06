import React from "react"
import Horgan from "../img/Horgan2.jpg"

export default function KnowUs() {
  return (
    <div className="knowUs">
        <div className="knowUs-image">
            <img src={Horgan} alt="skater with a deck"/>
        </div>
        <div className="knowUs-text">
            <h2>Get to know us</h2>

            <p>
                Plus 2.34 is Portharcourt's vibrant hub for skateboarding culture. 
                We're a haven for skaters of all levels, from those taking their 
                first wobbly steps on the board to seasoned shredders pushing their limits. 
                Expect a community buzzing with energy, a space where passion for 
                skateboarding is contagious, and where you'll find both encouragement 
                and challenge as you learn, grow, and connect with like-minded individuals. 
                Join us and experience the thrill of pushing boundaries, 
                both on the board and within yourself.
            </p>

            <button className="btn btn-light">
                Learn More
            </button>
        </div>
    </div>
  )
}
