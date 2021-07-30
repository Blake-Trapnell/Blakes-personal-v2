import React from "react"
import {Switch, Route} from "react-router-dom"
import Main from "./Components/Main/Main.js"

export default (
    <Switch>
    <Route path ="/" exact component={Main}/>
    </Switch>
)