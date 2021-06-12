import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./App.css";

function Pagination() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
    const data = res.data;
    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((pd) => (
      <div key={pd.id}>
        <p>{pd.title}</p>
        <img src={pd.thumbnailUrl} alt="" />
      </div>
    ));
    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <div className="App">
      {/* {data} */}
      <table>
        <tbody>
          {data.map((row, index) => {
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
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Pagination;
