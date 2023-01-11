import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    axios.get(`http://localhost:5000/data/${id}`).then((res) => {
      console.log(res.data);
      res.data.map((item) => {
        console.log(item);
        setName(item.name);
        setEmail(item.email);
      });
    });
  };

  const UpdatedData = {
    name: name,
    email: email,
  };

  const updateFormData = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/update/${id}`, UpdatedData).then((res) => {
      console.log(res.data);
      swal("Updated", "Your Data Updated Successfully", "success");
      navigate("/");
    });
  };
  return (
    <div className="container mt-4 bg-dark text-white p-4 rounded shadow">
      <form onSubmit={updateFormData}>
        <div className="text-center">
          <h1>Update Data</h1>
        </div>
        <div className="mt-2">
          <label className="my-2">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mt-2">
          <label className="my-2">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-light " type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
