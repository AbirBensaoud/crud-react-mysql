import React from "react";
import "../App.css";

const Navbar = () => {
    return(
<div className="Navbar">

    <div className="leftSide">
        <div className="links">
        <a href="/home" >Home</a>

        <a href="/inventaire" >Liste d'inventaire</a>

        <a href="/login" >Connexion</a>
        </div>

    </div>
    
    <div className="rightSide">
        <input type="text" placeholder="" />
        <button>Search</button>
    </div>

</div>
    );
};

export default Navbar;
