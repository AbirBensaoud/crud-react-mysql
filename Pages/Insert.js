import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import Axios from "axios";

function Insert() {
  const [id, setid] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [occupation, setOccupation] = useState("");
  const [password, setPassword] = useState("");

  const Submitclic = () => {
    Axios.post("http://localhost:3001/insert", {
      
      id: id,
      username: username,
      phone: phone,
      occupation: occupation,
      password: password,

    }).then(() => {
      alert("Successful insert");
    });
    <Redirect to="/login"/> 
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
          <h4 className="text-center mb-4">Add A employee</h4>

          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Employee ID"
              name="id"
              value={id}
              onChange={(e) => {
                setid(e.target.value);
              }}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Employee Name"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter employee number phone"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter employee occupation"
              name="occupation"
              value={occupation}
              onChange={(e) => {
                setOccupation(e.target.value);
              }}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter employee password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button onClick={Submitclic}  
  className="btn btn-secondary btn-block">
            Register Employee
          </button>
        </div>
      </div>
    </div>
  );
}

export default Insert;
 