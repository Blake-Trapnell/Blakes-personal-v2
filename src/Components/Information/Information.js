import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Information.css"

export default class Information extends Component {
    state = {
        displayContact: 0,
        displaySkills: 0,
        displayProjects: 0,
    }

    changeDisplay(key, e) {
        if (e === 0) {
            this.setState({
                [key]: 300
            })
        }
        else {
            this.setState({
                [key]: 0
            })
        }

    }

    render() {

        return (
            <div className="information-outer">
                <div style={{ opacity: this.state.displayContact }} className="left">
                    <div className="Contact_Outer">
                        <div className="Contact_Profile_image"></div>

                        <h3 id="email" className="Contact_Links email">Email: <p>
                            BlakeTrapnell.Dev@Gmail.com</p>
                        </h3>
                        <a style={{ color: "whitesmoke" }} target="_blank" href="https://github.com/Blake-Trapnell" >
                            <h3 id="github" className="Contact_Links github">GitProfile: <p>
                                https://github.com/Blake-Trapnell</p>
                            </h3>
                        </a>
                        <a style={{ color: "whitesmoke" }} target="_blank" href="https://www.linkedin.com/in/blake-trapnell-0b526495/">
                            <h3 id="linkedin" className="Contact_Links linkedin">LinkedIn Profile: https://www.linkedin.com/in/blake-trapnell-0b526495/</h3>
                        </a>

                        <h1 id="aboutme" className="Contact_Links Aboutme">About me</h1>
                    </div>
                </div>
                <div className="center">
                    <div className="center-outer">
                        <h1>Blake Trapnell</h1>
                        <h3 className="smaller-text">Fullstack Web Developer</h3>
                        <div className="display-info">
                            <h3 onClick={() => this.changeDisplay("displayContact", this.state.displayContact)} className="smaller-text hover">Contact</h3>
                            <h3 onClick={() => this.changeDisplay("displaySkills", this.state.displaySkills)} className="smaller-text hover skills">skills</h3>
                            <h3 onClick={() => this.changeDisplay("displayProjects", this.state.displayProjects)} className="smaller-text hover">Projects</h3>
                        </div>
                    </div>
                    <div style={{ opacity: this.state.displaySkills }} className="skills-outer">
                        <div className="skills-container">
                            <a className="down"  target="_blank" href="https://www.javascript.com">
                            <div className="skills-logo js-square"></div>
                            </a>
                            <a className="up" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
                            <div className="skills-logo html5"></div>
                            </a>
                            <a className="down" target="_blank" href="https://reactjs.org/">
                            <div className="skills-logo react"></div>
                            </a>
                            <a className="up" target="_blank" href="https://developer.mozilla.org/en-US/docs/Archive/CSS3">
                            <div className="skills-logo css3"></div>
                            </a>
                            <a className="down" target="_blank" href="https://www.adobe.com/products/photoshopfamily.html">
                            <div className="skills-logo photoshop"></div>
                            </a>
                            <a className="up" target ="_blank" href="https://www.adobe.com/products/photoshopfamily.html">
                            <div className="skills-logo postgres"></div>
                            </a>
                            <a className="down" target="_blank" href="https://www.heroku.com/">
                            <div className="skills-logo heroku"></div>
                            </a>
                        </div>
                        <a className="node" target="_blank" href="https://nodejs.org/en/about/">
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div style={{ opacity: this.state.displayProjects }} className="Projects_Outer">
                        <h1 style={{fontSize: "3rem"}}className="Projects-Title">Projects:</h1>
                        <div className="Aces-Dungeon-Creator">
                            <div className="Aces-Background">
                            </div>
                        </div>
                        <div className="About-Aces-Dungeon-Creator">
                            <a style={{ color: "whitesmoke", fontSize: "1.5rem" }} href="http://www.acesdungeoncreator.com" target="_blank">
                                <h1 className="Projects-Title">Ace's Dungeon Creator</h1>
                            </a>
                            <h4>A mobile responsive website <p>
                                designed to let users take their</p>
                                <p>Table Top Dungeons and Dragons</p><p>
                                    Game on the go with them</p></h4>
                        </div>
                        <div className="Game-Traders">
                            <div className="game-Trader-Background">
                            </div>
                        </div>
                        <div className="About-game-Traders">
                            <a style={{ color: "whitesmoke", fontSize: "1.5rem" }} href="http://104.248.178.127:4200/#/" target="_blank">
                                <h1 className="Projects-Title">Game Traders</h1>
                            </a>
                            <h4>A Smart rework of the current <p>
                                pre-owned game Industry</p>
                                <p>Peer to Peer trades allow</p><p>
                                    discounted prices on all trades</p></h4>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}