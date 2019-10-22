import React from "react"
import "./Home.css"

export default function Home() {
    return (
        <div className="background">
            <div className="water">
            </div>
            <div className="leaves"></div>
            <svg>
                <filter id="water" x="0" y="0" width="100%" height="100%">
                    <feTurbulence id="water-filter" numOctaves="5" seed="4" baseFrequency="0.1 0.01"> </feTurbulence>
                    <feDisplacementMap scale="8" in="SourceGraphic"></feDisplacementMap>
                    <animate xlinkHref="#water-filter" attributeName="baseFrequency" dur="60s"
                    keytime="0;0.5" values="0.04 0.08; 0.05 0.09; 0.04 0.08" repeatCount = "indefinite"></animate>
                </filter>
            </svg>
            <svg>
                <filter id="leaves" x="0" y="0" width="100%" height="100%">
                    <feTurbulence id="leaves-filter" numOctaves="10" seed="4" baseFrequency="0.02 0.01"> </feTurbulence>
                    <feDisplacementMap scale="2" in="SourceGraphic"></feDisplacementMap>
                    <animate xlinkHref="#leaves-filter" attributeName="baseFrequency" dur="60s"
                    keytime="0;0.5" values="0.04 0.08; 0.06 0.10; 0.04 0.08" repeatCount = "indefinite"></animate>
                </filter>
            </svg>
        </div>
    )
}