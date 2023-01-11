import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Home = () => {
  const [data, setData] = useState([]);
  axios.get("http://localhost:5000").then((res) => {
    setData(res.data);
  });

  const deleteItem = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`).then((res) => {
      console.log(res.data);
      swal("Deleted", "Your Data Deleted Successfully", "success");
    });
  };

  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`/update/${item.id}`} className="btn btn-dark mx-1">
                  Update
                </Link>
                <button
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                  className="btn btn-danger mx-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
