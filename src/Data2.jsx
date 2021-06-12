import React from "react";
import axios from "axios";

import JsonData from "./city.json";

const removeDuplicates = (x, key) => {
  return [...new Map(x.map((item) => [key(item), item])).values()];
};

class Data extends React.Component {
  state = {
    arr: [
      { name: "vikram", age: 100, city: "Bangalore", status: "active" },
      { name: "Linux", age: 100, city: "kozhikode", status: "active" },
      { name: "vinesh", age: 100, city: "Delhi", status: "inactive" },
      { name: "vinesh", age: 100, city: "Delhi", status: "inactive" },
      { name: "chitnesh", age: 100, city: "Trivandrum", status: "inactive" },
      { name: "abc", age: 100, city: "Delhi", status: "inactive" },
    ],
  };

  // getUser = () => {
  //   axios.get("user.json").then((data) => {
  //     this.setState({
  //       data: [...new Set(JsonData.map(({ name }) => name))],
  //     });
  //   });
  // };

  // componentDidMount() {
  //   this.getUser();
  // }

  render() {
    let sortData = JsonData.sort(function (a, b) {
      return a.city.toLowerCase() < b.city.toLowerCase()
        ? -1
        : a.city > b.city
        ? 1
        : 0;
    });
    console.log(removeDuplicates(sortData, (item) => item));

    // const searchData = (arg) =>
    //   JsonData.map((val, index) => {
    //     let sliceVal = val.name.slice(0, 1);
    //     console.log(sliceVal);

    //     if (sliceVal == arg) {
    //       console.log(val);
    //     }
    //   });
    // searchData("D");

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center mt-5">
            <div className="bg-info text-white border text-center">
              <h3>{JsonData.length} - User List </h3>

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
                  {sortData.map((cval, index) => {
                    return (
                      <tr key={index}>
                        <td>{cval.name}</td>
                        <td>{cval.age}</td>
                        <td>{cval.city}</td>
                        <td>{cval.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* <div>
                {JsonData.sort(function (a, b) {
                  return a.city < b.city ? -1 : a.city > b.city ? 1 : 0;
                })} */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Data;
