import React, { Component } from "react";
import axios from "axios";
// import _ from "lodash";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      allProduct: [],
    };
  }

  getProduct = () => {
    let url = "http://jsonplaceholder.typicode.com/todos";
    axios.get(url).then((response) => {
      if (response.data.length) {
        this.setState({
          allProduct: response.data,
        });
      }
    });
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    // const pageSize = 10;
    // const pageCount = this.state.allProduct
    //   ? Math.ceil(this.state.allProduct.length / pageSize)
    //   : 0;
    // if (pageCount === 1) return null;
    // const pages = _.range(1, pageCount + 1);

    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-12">
            <h2 className="text-center">
              Length of the data received - {this.state.allProduct.length}
            </h2>

            {/* <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>User ID</th>
                  <th>Title</th>
                  <th>Status</th>
                </tr>
              </thead> */}
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="right">Id</TableCell>
                    <TableCell align="right">UserId</TableCell>
                    <TableCell align="right">Title</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.allProduct.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.id}</TableCell>
                      <TableCell align="right">{row.userId}</TableCell>
                      <TableCell align="right">{row.title}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* <tbody>
                {this.state.allProduct.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td>{row.id}</td>
                      <td>{row.userId}</td>
                      <td>{row.title}</td>
                      <td>
                        <p
                          className={
                            row.completed ? "btn btn-success" : "btn btn-danger"
                          }
                        >
                          {row.completed ? "Completed" : "Pending"}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody> */}
            {/* </table> */}
            {/* <nav className="d-flex justify-content-center">
              <ul className="pagination">
                {pages.map((page) => {
                  <li className="page-link">{page}</li>;
                })}
              </ul>
            </nav> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
