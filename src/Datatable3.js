import React from "react";
import { Table, Button, FormGroup, Form, Label, Input } from "reactstrap";

class DataTable extends React.Component {
  render() {
    const items = this.props.items.map((item) => {
      return (
        <tr key={item.id}>
          <td>
            <Form>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                </Label>
              </FormGroup>
            </Form>
          </td>
          <th scope="row">{item.id}</th>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          <td>{item.avatar}</td>
        </tr>
      );
    });

    return (
      <div
        style={{
          maxHeight: "600px",
          overflowY: "auto",
        }}
      >
        <Table responsive hover>
          <thead>
            <tr>
              <th>Action</th>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </Table>
      </div>
    );
  }
}

export default DataTable;
