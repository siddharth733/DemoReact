import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = {
    name: name,
    email: email,
    password: password,
  };
  const submitData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/add", data).then((res) => {
      console.log(res.data);
      swal("Added", "Your Data Added Successfully", "success");
      setName("");
      setEmail("");
      setPassword("");
    });
  };
  return (
    <div className="container mt-4 bg-dark text-white p-4 rounded shadow">
      <form onSubmit={submitData}>
        <div className="text-center">
          <h1>Add Data</h1>
        </div>
        <div className="mt-2">
          <label className="my-2">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            required
          />
        </div>
        <div className="mt-2">
          <label className="my-2">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
        </div>
        <div className="mt-2">
          <label className="my-2">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-light" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
