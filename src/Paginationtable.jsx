import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "title", headerName: "Title", width: 300 },
  //   { field: "body", headerName: "Body", width: 600 },
];

const Page = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  });
  return (
    <div style={{ height: 1000, width: "100%" }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
};

export default Page;
