import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const Myhook4 = () => {
  const { userid } = useParams();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>React js useParams Example</h2>
          <h3>The Parameter Value is : {userid}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <li className="list-group-item active">Navigation</li>
          <li className="list-group-item">
            <Link to="/1/hook4">User One</Link>
          </li>
          <li className="list-group-item">
            <Link to="/2/hook4">User Two</Link>
          </li>
        </div>
        <div className="col-md-9"></div>
      </div>
    </div>
  );
};

export default Myhook4;
