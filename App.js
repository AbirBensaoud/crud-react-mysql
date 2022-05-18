
//import { PowerBIEmbed } from 'powerbi-client-react';
//import { models } from "powerbi-client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Insert from "./Pages/Insert";
import Update from "./Pages/Update";
import Affiche from "./Pages/Affiche";
import Inventaire from "./Pages/Inventaire";
import Vacation from "./Pages/Vacation";
import Preparation from  "./Pages/Preparation";
import Home from "./Pages/Home";
import ListeInv from "./Pages/ListeInv";

const App = () => {

  return (

    <Router>
      <div classname="App">
       <Switch>
        <Route exact path="/home" component={ Home }/>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/insert" component={ Insert } />
        <Route exact path="/affiche" component={ Affiche } />
        <Route exact path="/update/:id" component={ Update } />
        <Route exact path="/inventaire/:nb" component={ Inventaire } />
        <Route exact path="/vacation/:num_com" component={ Vacation } />
        <Route exact path="/preparation" component={ Preparation } />
        <Route exact path="/liste" component={ ListeInv } />

        </Switch>
        
      </div>

    </Router>
  );
}

export default App;
