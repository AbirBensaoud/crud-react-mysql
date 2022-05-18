import Axios from "axios";
import React, { useState, useEffect } from 'react';
import { useHistory} from "react-router-dom";



function Affiche() {

  let history = useHistory();


const [Employeeliste, setEmployeeliste] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/affiche").then((response) => {
      setEmployeeliste(response.data);
      //console.log(response.data);
    });
  }, []);


  
  
  const deleteAdmin = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };
  return (

    <div class="col-sm-8">
      <h5 class="text-center  ml-4 mt-4  mb-5">View Records</h5>
      <div class="input-group mb-4 mt-3">
        <div class="form-outline">
          <a href="insert"><button>Créer un nouveau</button></a>

          <input
            type="text"
            id="form1"
            class="form-control"
            placeholder="Search Employee Here"
            style={{ backgroundColor: "#ececec" }}
          />
        </div>
        <table class="table table-hover  table-striped table-bordered ml-4 ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>phone</th>
              <th>occupation</th>
              <th>password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Employeeliste.map((val) => (
              <tr>
                <td>{val.id}</td>
                <td>{val.username}</td>
                <td>{val.telephone}</td>
                <td>{val.occupation}</td>
                <td>{val.password}</td>
                <td>
                <button   className="text-danger mr-2"    
                variant="outline-danger"
                  onClick={() => {
                    const confirmBox = window.confirm(
                      "Do you really want to delete "+ val.username
                    )
                          if (confirmBox === true) {
                            deleteAdmin(val.id)
                          }
                  }}>delete </button>
                <button   variant="outline-danger"
                       onClick={() => {
                        history.push(`/update/${val.id}`);
                       // history.push(`/update`);

                    }} className="btn btn-secondary btn-block"      
                        >Update </button>
                </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Affiche;