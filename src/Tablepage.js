import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import DataTable from "./Datatable3";
import "bootstrap/dist/css/bootstrap.min.css";
import TablePagination from "@material-ui/core/TablePagination";

class Table extends Component {
  state = {
    items: [],
    page: 0,
    rowsPerPage: 5,
    totalRows: 0,
  };

  getItems() {
    let url = `https://reqres.in/api/users?page=${
      this.state.page + 1
    }&per_page=${this.state.rowsPerPage}`;
    // let url = "https://jsonplaceholder.typicode.com/users";
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((items) => {
        console.log(items.data, "items");
        this.setState({ items: items.data, totalRows: items.total });
      })
      .catch((err) => console.log(err));
  }

  addItemToState = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
    }));
  };

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex((data) => data.id === item.id);
    const newArray = [
      // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
      // add the updated item to the array
      item,
      // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1),
    ];
    this.setState({ items: newArray });
  };

  // deleteItemFromState = (id) => {
  //   const updatedItems = this.state.items.filter((item) => item.id !== id);
  //   this.setState({ items: updatedItems });
  // };

  componentDidMount() {
    this.getItems();
  }
  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: parseInt(event.target.value, 10) });
    this.setState({ page: 0 });
  };
  handleChangePage = (event, newPage) => {
    console.log(newPage, "newPage");
    this.setState({ page: newPage }, () => {
      this.getItems();
    });
  };

  render() {
    return (
      <>
        <div className="Container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={{ margin: "20px 0" }} className="text-center">
                Table Pagination
              </h1>
            </div>
          </div>

          <Row>
            <Col>
              {this.state.items.length ? (
                <DataTable
                  items={this.state.items}
                  updateState={this.updateState}
                  // deleteItemFromState={this.deleteItemFromState}
                />
              ) : null}
            </Col>
          </Row>
          <TablePagination
            component="div"
            count={this.state.totalRows}
            page={this.state.page}
            onChangePage={this.handleChangePage}
            rowsPerPage={this.state.rowsPerPage}
            onChangerowsPerPage={this.handleChangerowsPerPage}
          />
        </div>
      </>
    );
  }
}

export default Table;
