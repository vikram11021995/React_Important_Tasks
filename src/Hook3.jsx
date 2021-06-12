import React, { useState } from "react";

const Hook3 = () => {
  const [itemlist, updateItem] = useState(["Apple", "Banana"]);

  const save = () => {
    let newitem = prompt("Enter item name");
    updateItem((itemlist) => [...itemlist, newitem]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="m-3">Single Array Push POP Example</h1>
          <h2>{itemlist.length} - Are Total Items</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 text-center">
          <h3 className="text-center">Add New Item</h3>
          <button className="btn btn-primary btn-block" onClick={save}>
            Add Item
          </button>
        </div>
        <div className="col-md-9">
          {itemlist.map((xitem, index) => {
            return (
              <p className="p-2 border" key={index}>
                {xitem}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hook3;
