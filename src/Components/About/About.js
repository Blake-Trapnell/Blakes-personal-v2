import React from "react"
import Home from "../Home/Home.js"
import "./About.css"

export default function About() {
    return(
        <div>
        <div className="About_Outer">
            <div className="Family_Picture"></div>
            <h1>My name is Blake Trapnell, I come from a family of 9. <p>
                 I'm a full stack Web Developer. I graduated from DevMountain</p>
                 <p>in 2019. I enjoy making fun, interactive websites with functional</p> <p>
                     use. I'm an animal lover, I have a soft spot particularily for Hedgehogs</p>
                    <p>I enjoy getting to know people, and playing games. </p>
                   </h1>
        </div>
        <Home/>
        </div>
    )
}