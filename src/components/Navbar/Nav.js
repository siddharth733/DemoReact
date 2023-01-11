import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-dark text-white navbar px-4">
      <div>
        <h1>Todo</h1>
      </div>
      <div className="raw">
        <Link className="nav-link mx-2" to="">
          Home
        </Link>
        <Link className="nav-link mx-2" to="/add">
          Add
        </Link>
      </div>
    </div>
  );
};

export default Nav;
