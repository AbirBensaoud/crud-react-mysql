import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";



function Inventaire () {

  const [faute, setFaute] = useState("");
  const [validite, setvalidite] = useState("");
  const [Inventaireliste, setInventaireliste] = useState([]);

const {nb} = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:3001/inventaire/${nb}`).then((response) => {
      setInventaireliste(response.data);
      console.log(response.data);
    });
  });

  const validerInv = (empl) => {
    Axios.put("http://localhost:3001/validerInv", {
      faute: faute,
      validite: validite,
      empl: empl,
    }).then(() => {
      alert("Successful update");
    });
  };

  return (
    <div class="col-sm-8">
      <form>
        <fieldset>
          <div align="right">
          </div>
          <h5 class="text-center  ml-4 mt-4  mb-5">Numéro d'inventaire : {nb}</h5>
          <div class="input-group mb-4 mt-3">
            <table class="table table-hover  table-striped table-bordered ml-4 ">
              <thead>
                <tr>
                  <th>Empl</th>
                  <th>dep</th>
                  <th>mag</th>
                  <th>type</th>
                  <th>Article</th>
                  <th>DateFIFO</th>
                  <th>Quantite</th>
                  <th>QTE_hgére</th>
                  <th>Total_Stock</th>
                  <th>Validite</th>
                  <th>Fautes</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Inventaireliste.map((val) => (
                  <tr>
                    <td>{val.empl}</td>
                    <td>{val.dep}</td>
                    <td>{val.mag}</td>
                    <td>{val.type}</td>
                    <td>{val.article}</td>
                    <td>{val.dateFIFO}</td>
                    <td>{val.qte}</td>
                    <td>{val.qtehgere}</td>
                    <td>{val.totalstock}</td>
                    
                    <td>
                      <select onChange={(e) => setvalidite(e.target.value)}>
                      <option selected>...</option>
                        <option
                          value="valide"
                          class="p-3 mb-2 bg-primary text-white"
                        >
                          valide
                        </option>
                        <option
                          value="invalide"
                          class="p-3 mb-2 bg-danger text-white"
                        >
                          Invalide
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        name="faute"
                        type="text"
                        placeholder="D/V/Q/E"
                        onChange={(e) => setFaute(e.target.value)}
                      />
                    </td>
                   
                    <td><button class="btn btn-primary" onClick={() => {validerInv(val.empl)}}>Valider</button></td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Inventaire;
