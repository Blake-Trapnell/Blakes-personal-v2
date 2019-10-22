import React, {Component} from "react"
import { Link } from "react-router-dom"
import "./Information.css"

export default class Information extends Component {
    state={
        displayContact: false,
        displaySkills: false,
        displayProjecs: false
    }

    changeDisplay(key, e) {
        this.setState({
            [key]: !e
        })
    }

render() {

    return (
        <div className="information-outer">
            <div className="left">
            {this.state.displayContact === true ? 
            <div className="Contact_Outer">
                <img src={require("../../Pics/profile.jpg")} className="Contact_Profile_image"></img>

                    <h3 id="email" className="Contact_Links email">Email: <p>
                        BlakeTrapnell.Dev@Gmail.com</p>
                    </h3>
                    <a style={{ color: "whitesmoke"}} target="_blank" href="https://github.com/Blake-Trapnell" >
                        <h3 id="github" className="Contact_Links github">GitProfile: <p>
                            https://github.com/Blake-Trapnell</p>
                        </h3>
                    </a>
                    <a style={{ color: "whitesmoke"}} target="_blank" href="https://www.linkedin.com/in/blake-trapnell-0b526495/">
                        <h3 id="linkedin" className="Contact_Links linkedin">LinkedIn Profile: https://www.linkedin.com/in/blake-trapnell-0b526495/</h3>
                    </a>
                   
                        <h1 id="aboutme" className="Contact_Links Aboutme">About me</h1>
            </div>
                        : null}
                   
            </div> 
            <div className="center">
                <div className="center-outer">

                <h1>Blake Trapnell</h1>
                <h3 className="smaller-text">Fullstack Web Developer</h3>
                <div className="display-info">
                <h3 onClick={()=> this.changeDisplay("displayContact", this.state.displayContact)} className="smaller-text hover">Contact</h3>
                <h3 onClick={()=> this.changeDisplay("displaySkills", this.state.displayContact)} className="smaller-text hover skills">skills</h3>
                <h3 onClick={()=> this.changeDisplay("displayProjects", this.state.displayContact)} className="smaller-text hover">Projects</h3>
                </div>
                </div>
            </div>
            <div className="right"></div>
        </div>
    )
}
}