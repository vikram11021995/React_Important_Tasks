import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  //use history
  const history = useHistory();
  console.log(history);

  console.log(location);

  return (
    <>
      <h1>
        User Page {fname}
        {lname}
      </h1>
      <p>My current location is {location.pathname}</p>
      {/* {location.pathname === `/user/vikram/singh` ? (
        <button onClick={() => alert(`you are awesome.`)}>Click Me</button>
      ) : null} */}
      {location.pathname === `/user/vikram/singh` ? (
        <button onClick={() => history.push("/data")}>Go Back</button>
      ) : null}
    </>
  );
};

export default User;
