import React, { useEffect,useState } from 'react';
import {Link } from "react-router-dom";
import axios from "axios";

const Controleur =()=>{



    const [Commandeliste,setCommandeliste] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3001/preparation").then((response)=> {
        setCommandeliste(response.data);
      });
    }, []);

    return (
     <div>  
      <h1> Liste des commandes</h1>
        <div style={{ marginTop: "150px" }}>
          <table className="styled-table">
            <thead>
              <tr>              
                <th style={{textAlign:"center"}}>Numero Commande </th>
                <th style={{textAlign:"center"}}>Magasin</th>
                <th style={{textAlign:"center"}}>Numero</th>
                <th style={{textAlign:"center"}}>Date impression</th>
                <th style={{textAlign:"center"}}>op</th>
                <th style={{textAlign:"center"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {Commandeliste.map((val)=>{
                return(
                  <tr>
                    <td>{val.num_com}</td>
                    <td>{val.mag}</td>
                    <td>{val.num}</td>
                    <td>{val.date}</td>
                    <td>{val.op} </td>
                    <td> 
                      <Link to={`/vacation  ${val.num_com}` }> 
                      <button className="btn btn-edit" > Listes des Vacations</button>
                      </Link>
                    </td>
                  </tr>
                );
              })};
            </tbody>
          </table>
        </div>
      </div>     
      )};

export default Controleur;
