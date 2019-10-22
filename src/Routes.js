import React from "react"
import {Switch, Route} from "react-router-dom"
import Main from "./Components/Main/Main.js"
import About from "./Components/About/About.js"

export default (
    <Switch>
    <Route path ="/" exact component={Main}/>
    <Route path = "/about" component ={About}/>
    </Switch>
)