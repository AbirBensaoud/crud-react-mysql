import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";


const Home = ({authorized}) => {
    if(!authorized) {
        return <Redirect to="/login" />                              
      }
return(
    <div>
      
    </div>
);
}

export default Home;