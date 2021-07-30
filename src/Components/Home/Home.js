import React, { Component } from "react"
import "./Home.css"

export default class Home extends Component {
    state = {
        moveWater: true
    }
    handleChange(key, e) {
        this.setState({
            [key]: !e
        })
    }
    
    render() {
        return (
            <div className="background-outer">
            <div className="background">
                <div className="water">
                </div>
                {this.state.moveWater === true ? 
                    <svg>
                    <filter id="water" x="0" y="0" width="100%" height="100%">
                        <feTurbulence id="water-filter" numOctaves="5" seed="4" baseFrequency="0.08 0.01"> </feTurbulence>
                        <feDisplacementMap scale="4" in="SourceGraphic"></feDisplacementMap>
                        <animate xlinkHref="#water-filter" attributeName="baseFrequency" dur="60s"
                            keytime="0;0.5" values="0.04 0.08; 0.05 0.09; 0.04 0.08" repeatCount="indefinite"></animate>
                    </filter>
                </svg>
                : null}
            </div>
            </div>
          
        )
    }
}
