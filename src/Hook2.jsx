import React, { useState } from "react";

const Hook2 = () => {
  const [item, updateItem] = useState(["Apple", "Banana", "Orange"]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>React JS Hooks useState Single Array Example</h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SI No.</th>
                <th>Item Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {item.map((xitem, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{xitem}</td>
                    <td>...Delete...</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hook2;
