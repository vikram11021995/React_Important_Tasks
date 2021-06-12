import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Form from "./Form.jsx";
import TabStatus from "./Tabstatus";
import Valid from "./Valid";
import City from "./City.jsx";
import Api from "./Api.jsx";
import Data from "./Data";
import Data10 from "./Data10";

// import Data1 from "./Data1";

import Hook1 from "./Hook1.jsx";
import Hook2 from "./Hook2.jsx";
import Hook3 from "./Hook3.jsx";
import CompA from "./CompA.jsx";
import User from "./user";
import Props10 from "./Props10";
import Props11 from "./Props11";
import Category from "./category";
// import Lifecycle from "./Lifecycle";
// import Page from "./Paginationtable";
import Page from "./Page";
import Hi from "./Hi";
import Table from "./Tablepage";
import Materialtable from "./Materialtable";

// import Error from "./Error";

const FirstName = createContext();
const LastName = createContext();

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route exact path="/city" component={City} />
            <Route exact path="/hook1" component={Hook1} />
            <Route exact path="/hook2" component={Hook2} />
            <Route exact path="/hook3" component={Hook3} />
            <Route exact path="/api1" component={Api} />
            <Route exact path="/data" component={Data} />
            <Route exact path="/data10" component={Data10} />
            <Route exact path="/user/:fname/:lname" component={User} />
            <Route exact path="/props10" component={Props10} />
            <Route exact path="/props102" component={Props10} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/hi" component={Hi} />
            <Route exact path="/tablepage" component={Table} />
            <Route exact path="/materialtable" component={Materialtable} />

            {/* <Route exact path="/lifecycle" component={Lifecycle} /> */}
            <Route exact path="/page" component={Page} />

            {/* <Route component={Error} /> */}
            {/* <Redirect to="/City" /> */}

            {/* <Route exact path="/compa" component={CompA} /> */}
            <FirstName.Provider value={"vikram"}>
              <LastName.Provider value={"kumar"}>
                <CompA />
              </LastName.Provider>
            </FirstName.Provider>
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
export { FirstName, LastName };
