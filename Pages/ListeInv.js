import React, { useEffect, useState } from "react";
import  Axios  from "axios";
import { Link } from "react-router-dom";


// Rearrange date value to get the order you want... also replace / with a cooler separator like ⋅
const ListeInv = () => {
 
    const [nb,setNb] = useState([]);
    const [date,setDate] = useState([]);
    const [validite,setValidite] = useState([]);
    const [faute,setFaute] = useState([]);
    const [resultat,setResultat] = useState([]);
    const [posts,setPosts] = useState([]);

    const Ajouter = () => {
      Axios.post("http://localhost:3001/addliste", {
        nb:nb,
        date: date,
        validite: validite,
        faute: faute,
        resultat: resultat,
      }).then(() => {
      alert("seccessful addition");
    });
    };

    useEffect(() => {
      Axios.get(`http://localhost:3001/liste`).then((response)=> {
        setPosts(response.data);
      });
    });
   
    const ValideList = (nb) =>{
      Axios.put("http://localhost:3001/valideList", {
        validite: validite,
        faute: faute,
        resultat: resultat,
        nb:nb,
      }).then(() => {
      alert("Controle terminé");
    });
    };

    
    

  return (
    <div>
          <button className="btn btn-secondary btn-block" onClick={Ajouter}> Ajouter </button>
          <button className="btn btn-edit" onClick={useEffect}>  </button>

          <div class="input-group mb-4 mt-3">
            <table class="table table-hover  table-striped table-bordered ml-4 ">
                <thead>
                 
                </thead>
                <tbody>
                  {posts.map((val)=>{
                    return(
                      <tr>
                        <td onChange={(e) => {
                          setNb(e.target.value);
                        }}>{val.nb}</td>
                        <td onChange={(e) => {
                          setDate(e.target.value);
                        }}>{val.date}
                        </td>
                        <td onChange={(e) => {
                          setValidite(e.target.value);
                        }}><input type="text" placeholder="Validité"/*{val.validite}*//></td>
                        <td onChange={(e) => {
                          setFaute(e.target.value);
                        }}><input type="text" placeholder="Faute" /*value={val.faute}*//></td>
                        <td onChange={(e) => {
                          setResultat(e.target.value);
                        }}><input type="text" placeholder="Resultat"/*{val.resultat}*//></td>

                        
                        <td>
                        <Link  to={`/inventaire/${val.nb}` }>
                          <button className="btn btn-edit" > Détails</button>
                          </Link>
                        </td>
                        <td>
                          <button className="btn btn-secondary btn-block" onClick={ValideList} >Enregistrer</button>
                        </td>
                      </tr>
                    );
                  })};
                </tbody>
              </table>
        </div>       
    </div>
  );
}

export default ListeInv;