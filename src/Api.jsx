import React from "react";
import axios from "axios";

class Api extends React.Component {
  // constructor() {
  //   super();
  state = {
    userList: [],
  };
  // }

  getUser = () => {
    axios.get("user.json").then((citydata) => {
      this.setState({
        userList: citydata.data,
      });
    });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered">
              <thead>
                <th>SI No</th>
                <th>Full Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Action</th>
              </thead>
              <tbody>
                {this.state.userList.map((cval, index) => {
                  if (cval.status == "active") {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
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
            <table className="table table-bordered">
              <thead>
                <th>SI No</th>
                <th>Full Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Action</th>
              </thead>
              <tbody>
                {this.state.userList.map((cval, index) => {
                  if (cval.status == "inactive") {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Api;
