import React from "react";

class TabStatus extends React.Component {
  state = {
    fname: "",
    roll: "",
    dept: "",
  };
  submitData = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: [event.target.value],
    });
  };
  filanSubmitData = () => {
    this.props.pushData(this.state.fname, this.state.roll, this.state.dept);
  };
  render() {
    return (
      <>
        <input type=" text" name="fname" onChange={this.submitData} />
        <input type=" text" name="roll" onChange={this.submitData} />
        <input type=" text" name="dept" onChange={this.submitData} />
        <input type="submit" value="submit" onClick={this.filanSubmitData} />
      </>
    );
  }
}
export default TabStatus;
