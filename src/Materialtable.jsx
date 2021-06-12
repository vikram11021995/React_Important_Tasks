import React, { useState, useEffect } from "react";

import {
  Container,
  Paper,
  Box,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
}));

function Materialtable() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerpage, setRowsperpage] = useState(3);

  const loadUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((resp) => setUsers(resp));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const onChangePage = (event, nextPage) => {
    setPage(nextPage);
  };

  return (
    <Container className={classes.root}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>email</TableCell>
              <TableCell>phone</TableCell>
              <TableCell>website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerpage, page * rowsPerpage + rowsPerpage)
              .map((users) => (
                <TableRow>
                  <TableCell>{users.name}</TableCell>
                  <TableCell>{users.email}</TableCell>
                  <TableCell>{users.phone}</TableCell>
                  <TableCell>{users.website}</TableCell>
                </TableRow>
              ))}

            <TableRow></TableRow>
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          count={users.length}
          rowsPerPage={rowsPerpage}
          page={page}
          onChangePage={onChangePage}
        />
      </TableContainer>
    </Container>
  );
}

export default Materialtable;
