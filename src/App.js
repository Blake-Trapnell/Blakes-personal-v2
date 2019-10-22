import React from 'react';
import {withRouter} from "react-router-dom"
import Home from "./Components/Home/Home.js"
import Information from "./Components/Information/Information.js"
import './App.css';

function App() {
  return (
    <div className="App">
    <Information/>
    <Home/>
    </div>
  );
}

export default withRouter(App);
