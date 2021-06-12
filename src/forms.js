// import React, { useState } from "react";

// const Forms = () => {
//   const [fullname, setFullName] = useState({
//     fname: "",
//     lname: "",
//   });

//   const inputEvent = (e) => {
//     // console.log(e.target.value);
//     setName(e.target.value);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     alert("form submitted");
//   };

//   return (
//     <>
//       <h1>
//         Hello {fullName.fname} {fullName.lname}
//       </h1>
//       <input
//         type="text"
//         placeholder="Name"
//         onChange={inputEvent}
//         name="fname"
//         value={fullName.fname}
//       />
//       <br />
//       <input
//         type="text"
//         placeholder="Last Name"
//         onChange={inputEvent}
//         name="lname"
//         value={fullName.lname}
//       />
//       <br />
//     </>
//   );
// };

// export default Forms;
