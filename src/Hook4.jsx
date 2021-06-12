import React, { useState } from "react";

const Hook3 = () => {
  const [booklist, updateBook] = useState(["C++", "Javascript", "React"]);
  const [newBook, processBook] = useState();

  const save = () => {
    updateBook((booklist) => [...booklist, newBook]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>Array Manipulation Using Hook</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h4>Add New Item</h4>
          <div className="border p-4">
            <label>Enter Item Name</label>
            <input
              type="text"
              className="form-control"
              value={newBook}
              onChange={(obj) => processBook(obj.target.value)}
            />
            <button className="btn btn-info mt-3 btn-block" onClick={save}>
              Save
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <h4 className="text-center">Available Items</h4>
          <table className="table table-bordered">
            <tr>
              <th>Book index</th>
              <th>Book Name</th>
              <th>Action</th>
            </tr>
            {booklist.map((xbook, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{xbook}</td>
                  <td
                    className="btn btn-danger btn-sm"
                    onClick={deleteBook.bind(this, index)}
                  >
                    delete
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hook3;
