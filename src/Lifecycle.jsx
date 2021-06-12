import React from "react";

class Lifecycle extends React.Component {
  constructor() {
    alert("1 : from constructor");
    super();
    this.state = {
      location: ["Bangalore", "Pune", "Mumbai", " Chennai", "Kolkata"],
      mycity: " ",
    };
  }
  pickcity = (obj) => {
    this.setState({
      mycity: obj.target.value,
    });
  };

  //it will execute when component will load
  componentDidMount() {
    alert("4: ComponentDidMount-Executed");
  }

  componentDidUpdate() {
    alert("5:ComponentDidUpdate-Executed");
  }
  render() {
    alert("3 : from render");
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="text-success">
              Available City:{this.state.location.length}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <select onChange={this.pickcity} className="form-control">
              <option value="">---Choose---</option>
              {this.state.location.map((xcity, index) => {
                return <option key={index}>{xcity}</option>;
              })}
            </select>
            <h1 className="text-danger text-center">
              Your City is : {this.state.mycity}
            </h1>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}
export default Lifecycle;
