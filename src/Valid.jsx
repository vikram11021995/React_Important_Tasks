import React from "react";

class Valid extends React.Component {
  render() {
    return (
      <>
        <h1>Name:{this.props.sendData.values}</h1>
        <h1>Name:{this.props.sendData.fname}</h1>
        <h1>Name:{this.props.sendData.roll}</h1>
        <h1>Name:{this.props.sendData.dept}</h1>
      </>
    );
  }
}
export default Valid;
