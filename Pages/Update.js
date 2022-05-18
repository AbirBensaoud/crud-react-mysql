
import React, { useState } from "react";
import Axios from "axios";
import {useParams} from 'react-router-dom';

function Update() {

  const [newPhone, setNewPhone] = useState("");
  const [newOccupation, setNewOccupation] = useState("");
  const [newPassword, setNewPassword] = useState("");
 // const {id}  =  window.body;
 // console.log(id)
 const {id} = useParams();

 
  const UpdateAdmin = (id) => {

    Axios.put(`http://localhost:3001/update/${id}`, {
      phone: newPhone,
      occupation: newOccupation,
      password: newPassword,
      id: id,

    }).then(() => {
      alert("Successful update");
    });
    setNewPhone("");
    setNewOccupation("");
    setNewPassword("");
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
          <h4 className="text-center mb-4">Update A employee</h4>
  
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter employee phone"
              name="phone"
              value={newPhone}
              onChange={(e) => {
                setNewPhone(e.target.value);
              }}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter employee occupation"
              name="occupation"
              value={newOccupation}
              onChange={(e) => {
                setNewOccupation(e.target.value);
              }}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter employee password"
              name="password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </div>

          <button onClick={() =>{UpdateAdmin(id)}} className="btn btn-secondary btn-block">
            Update 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update;