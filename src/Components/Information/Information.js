import React, { Component } from "react"
import "./Information.css"

export default class Information extends Component {
    state = {
        displayContact: false,
        displaySkills: false,
        displayProjects: false,
    }
    changeDisplay(key, e) {
            this.setState({
                [key]: !e
            })
      }


    render() {
        return (
            <div className="information-outer">
                {this.state.displayContact === true? 
                <div className="left">
                    <div className="Contact_Outer">
                        <div className="Contact_Profile_image"></div>
                        <a rel="noopener noreferrer" style={{ color: "whitesmoke" }} target="_blank"  href="https://mail.google.com/mail/?view=cm&fs=1&to=blaketrapnell.dev@gmail.com">
                        <h3 id="email" className="Contact_Links email">Email: <p>
                            BlakeTrapnell.Dev@Gmail.com</p>
                        </h3>
                        </a>
                        
                        <a rel="noopener noreferrer" style={{ color: "whitesmoke" }} target="_blank" href="https://github.com/Blake-Trapnell" >
                            <h3 id="github" className="Contact_Links github">GitProfile: <p>
                                https://github.com/Blake-Trapnell</p>
                            </h3>
                        </a>
                        <a rel="noopener noreferrer" style={{ color: "whitesmoke" }} target="_blank" href="https://www.linkedin.com/in/blake-trapnell-0b526495/">
                            <h3 id="linkedin" className="Contact_Links linkedin">LinkedIn Profile: https://www.linkedin.com/in/blake-trapnell-0b526495/</h3>
                        </a>
                    </div>
                </div>
                : <div className="left"></div> }
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

                    {this.state.displaySkills === true ? 
                    
                    <div  className="skills-outer">
                        <div className="skills-container">
                            <a rel="noopener noreferrer" className="down"  target="_blank" href="https://www.javascript.com">
                            <div className="skills-logo js-square"></div>
                            </a>
                            <a rel="noopener noreferrer" className="up" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
                            <div className="skills-logo html5"></div>
                            </a>
                            <a rel="noopener noreferrer" className="down" target="_blank" href="https://reactjs.org/">
                            <div className="skills-logo react"></div>
                            </a>
                            <a rel="noopener noreferrer"  className="up" target="_blank" href="https://developer.mozilla.org/en-US/docs/Archive/CSS3">
                            <div className="skills-logo css3"></div>
                            </a>
                            <a rel="noopener noreferrer"  className="down" target="_blank" href="https://www.adobe.com/products/photoshopfamily.html">
                            <div className="skills-logo photoshop"></div>
                            </a>
                            <a rel="noopener noreferrer"  className="up" target ="_blank" href="https://www.adobe.com/products/photoshopfamily.html">
                            <div className="skills-logo postgres"></div>
                            </a>
                            <a rel="noopener noreferrer"  className="down" target="_blank" href="https://www.heroku.com/">
                            <div className="skills-logo heroku"></div>
                            </a>
                        </div>
                        <a rel="noopener noreferrer"  className="node" target="_blank" href="https://nodejs.org/en/about/">
                        </a>
                    </div>
                    : <div className="skills-outer"></div> }
                </div>
                {this.state.displayProjects === true ?
                <div className="right">
                    <div  className="Projects_Outer">
                        <h1 style={{fontSize: "3rem"}} className="Projects-Title">Projects:</h1>
                        <div className="Aces-Dungeon-Creator">
                            <div className="Aces-Background">
                            </div>
                        </div>
                        <div className="About-Aces-Dungeon-Creator">
                            <a rel="noopener noreferrer"  style={{ color: "whitesmoke", fontSize: "1.5rem" }} href="http://www.acesdungeoncreator.com" target="_blank">
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
                            <a rel="noopener noreferrer"  style={{ color: "whitesmoke", fontSize: "1.5rem" }} href="http://104.248.178.127:4200/#/" target="_blank">
                                <h1 className="Projects-Title">Game Traders</h1>
                            </a>
                            <h4>A Smart rework of the current <p>
                                pre-owned game Industry</p>
                                <p>Peer to Peer trades allow</p><p>
                                    discounted prices on all trades</p></h4>
                        </div>

                    </div>
                </div>
                : <div className="right"></div> }
            </div>
        )
    }
}