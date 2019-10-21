import React from "react"
import "./Home.css"

export default function Home() {
    return (
        <div className="background">
            <div className="water">

            </div>
            <svg>
                <filter id="turbulence" x="0" y="0" width="100%" height="100%">
                    <feTurbulence id="water-filter" numOctaves="5" seed="4" baseFrequency="0.8 0.03"> </feTurbulence>
                    <feDisplacementMap scale="10" in="SourceGraphic"></feDisplacementMap>
                    <animate xlinkHref="#water-filter" attributeName="baseFrequency" dur="60s"
                    keytime="0;0.5" values="0.04 0.08; 0.05 0.09; 0.01 0.03" repeatCount = "indefinite"></animate>
                </filter>
            </svg>
        </div>
    )
}