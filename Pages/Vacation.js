import axios from "axios";    
import { useState, useEffect } from "react"
import { useParams ,Link} from "react-router-dom";
import React from 'react';

const Vacation = () =>{

    const [posts,setPosts] = useState([]);

    // Get ID from URL
    const {num_com} = useParams();

    useEffect(() => {
      axios.get(`http://localhost:3001/vacation/${num_com}`).then((response)=> {
        setPosts(response.data);
      });
    });
 
        return (
          <div>
            <div style={{ marginTop: "150px" }}>
              <h1> Liste des UMs</h1>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th style={{textAlign:"center"}}>N°vacation</th>
                    <th style={{textAlign:"center"}}>Op</th>
                    <th style={{textAlign:"center"}}>N°commande</th>
                    <th style={{textAlign:"center"}}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((val)=>{
                    return(
                      <tr>
                        <td>{val.num_vac}</td>
                        <td>{val.op}</td>
                        <td>{val.num_com}</td> 
                          <td>
                          <Link  to={`/um/${val.num_vac}` }>
                          <button className="btn btn-edit" > Listes des UMs</button>
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

  export default Vacation ;