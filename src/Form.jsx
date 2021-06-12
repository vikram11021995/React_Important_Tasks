import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import TabStatus from "./Tabstatus";
import Valid from "./Valid";
import { AppBar } from "@material-ui/core";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: 0,
      fname: "",
      roll: "",
      dept: "",
    };
  }
  handleChange = (event, val) => {
    this.setState({
      values: val,
    });
  };
  captureData = (fname, roll, dept) => {
    this.setState({
      fname: fname,
      roll: roll,
      dept: dept,
    });
  };
  render() {
    return (
      <div>
        <h1>Name:{this.state.fname}</h1>
        <h1>roll:{this.state.roll}</h1>
        <h1>dept:{this.state.dept}</h1>

        <Tabs onChange={this.handleChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
        </Tabs>

        {this.state.values === 0 && <TabStatus pushData={this.captureData} />}
        {this.state.values === 1 && <Valid sendData={this.state} />}
      </div>
    );
  }
}
export default Form;
