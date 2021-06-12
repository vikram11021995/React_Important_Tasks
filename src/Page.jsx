import React, { useState, useEffect } from "react";
// import MaterialTable from "@material-ui/core";
import MaterialTable from "material-table";

const Page = () => {
  const [data, setData] = useState([]);
  // console.log(data);

  // const rows = [
  //   {
  //     title: "ID",
  //     field: "id",
  //   },
  //   {
  //     title: "UserId",
  //     field: "userid",
  //   },
  //   {
  //     title: "Title",
  //     field: "title",
  //   },
  //   {
  //     title: "Status",
  //     field: "completed",
  //   },
  // ];

  const columns = [
    {
      title: "ID",
      field: "id",
    },
    {
      title: "UserId",
      field: "userid",
    },
    {
      title: "Title",
      field: "title",
    },
    {
      title: "Status",
      field: "completed",
    },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((response) => setData(response));
    // console.log(data);
  }, []);
  // console.log(data);

  return (
    <div>
      <h1>hihihihihi</h1>
      {
        (data.map = (data1) => {
          /* console.log(data); */
          return (
            <MaterialTable
              title="Material Table"
              data={data}
              columns={columns}
              pageSize={20}
            />
          );
        })
      }
    </div>
  );
};

export default Page;
