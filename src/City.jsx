import React from "react";
import JsonData from "./city.json";

class City extends React.Component {
  constructor() {
    super();

    // this.state = {
    //   JsonData: [],
    // };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2 className="text-danger text-center">User List</h2>
        </div>
        <div className="row">
          <div className="col-md-12  text-center">
            <div className="bg-info text-white border text-center">
              <h3>{JsonData.length} - user List </h3>
              <h1 className="text-primary">active Members</h1>
              <table className="table table-bordered table-sm">
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {JsonData.map((cval, index) => {
                    if (cval.status == "active") {
                      return (
                        <tr key={index}>
                          <td>{cval.name}</td>
                          <td>{cval.age}</td>
                          <td>{cval.city}</td>
                          <td>{cval.status}</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
              <h1>
                Total Active Member:
                {JsonData.filter((x) => x.status == "active").length}
              </h1>
              <br />
              <h1 className="text-primary">Inactive Members</h1>
              <table className="table table-bordered table-sm">
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {JsonData.map((cval, index) => {
                    if (cval.status == "inactive") {
                      return (
                        <tr key={index}>
                          <td>{cval.name}</td>
                          <td>{cval.age}</td>
                          <td>{cval.city}</td>
                          <td>{cval.status}</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
              Inactive
              <p>{JsonData.filter((x) => x.status == "inactive").length}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default City;
