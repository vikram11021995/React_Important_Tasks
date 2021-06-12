import React from "react";
import axios from "axios";

import JsonData from "./city.json";

class Data extends React.Component {
  state = {
    sortData: [],
  };

  render() {
    let sortData = JsonData.sort(function (a, b) {
      return a.city.toLowerCase() < b.city.toLowerCase()
        ? -1
        : a.city > b.city
        ? 1
        : 0;
    });

    // console.log(removeDuplicates(sortData, (item) => item));

    // const remDuplicates = (sortData, y) =>
    //   sortData.reduce((accumulator, cval) => {
    //     if (!accumulator.find((obj) => obj[y] === cval[y])) {
    //       accumulator.push(cval);
    //     }
    //     return accumulator;
    //   }, []);

    const removeDuplicates = (sortData, x, y) =>
      sortData.reduce((accumulator, cval) => {
        if (!accumulator.find((obj) => obj[(x, y)] === cval[(x, y)])) {
          accumulator.push(cval);
        }
        return accumulator;
      }, []);
    let removedData = removeDuplicates(sortData, "city", "name");

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center mt-5">
            <div className="bg-info text-white border text-center">
              <h3>{sortData.length} - User List </h3>

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
                  {removedData.map((cval, index) => {
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
