import React, { Component } from "react";

class Props13 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-3 mb-3">
        <div className="p-3 border">
          <h4>{this.props.fullname}</h4>
          <p>{this.props.mobileno}</p>
          <p>{this.props.cityname}</p>
          <p>{this.props.age}</p>
          <img src={this.props.photo} className="img-fluid rounded" />
        </div>
      </div>
    );
  }
}

export default Props13;
