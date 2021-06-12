import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

const Hook1 = () => {
  const [counter, updateCounter] = useState(5);

  const one = () => {
    updateCounter(counter + 5);
  };

  const two = () => {
    if (counter > 5) {
      updateCounter(counter - 5);
    } else {
      alert("sorry! let it be : " + counter);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <AddIcon />
          <h1>React JS Hooks useState Example</h1>
          <button className="btn btn-primary m-2" onClick={one}>
            Click to + By 5
          </button>
          <button className="btn btn-primary m-2" onClick={two}>
            Click to - By 5
          </button>
          <button className="btn btn-primary m-2" onClick={two}>
            <AddIcon />
            <DeleteIcon />
            Click to - By 5
          </button>
          {/* <p className="text-danger">{message}</p> */}
          <h2 className="text-danger">{counter}</h2>
        </div>
      </div>
    </div>
  );
};

export default Hook1;
