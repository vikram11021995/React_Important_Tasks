import logo from './logo.svg';
import './App.css';
import First from "./component/First";

function App() {
  return (
    <div>
      {
        First.map((val) =>{
          if(val.emp_code == 5){
            return(
              <table>
                
              </table>
            )
          }
        })  
      }
        {
        First.filter((val) =>val.emp_code<5 && val.status == 0).map((val1)=> )  
      }

{
        First.filter((val) =>val.city == "bangalore" || val.age == 26 && val.status==0 ).map((val1)=> )  
      }
     <h1> active users data</h1>
      {First.map((post) => {
        if (post.status == 1)
          return 
            <table>
              <div key={post.id}>
                <br />
                <tr>
                  <th>ID</th>
                  <th>Emp-name</th>
                  <th>Email</th>
                  <th>status</th>
                  <th>Age</th>
                  
                </tr>

                <tr>
                   <td>{post.id}</td>
                  <td>{post.emp_name}</td>
                  <td>{post.emp_email}</td>
                  <td>{post.status}</td>
                  <td>{post.age}</td>
                </tr>
              </div>
            </table>
          );
      })}

      

<h1> In active users data</h1>
      {First.map((post) => {
        if (post.status == 0)

          return (
            <table>
              <div key={post.id}>
                <br />
                <tr>
                  <th>ID</th>
                  <th>Emp-name</th>
                  <th>Email</th>
                  <th>status</th>
                  <th>Age</th>
                </tr>

                <tr>
                   <td>{post.id}</td>
                  <td>{post.emp_name}</td>
                  <td>{post.emp_email}</td>
                  <td>{post.status}</td>
                  <td>{post.age}</td>
                </tr>
              </div>
            </table>
          );
   
   
   })}


    </div>
  );
}

export default App;
