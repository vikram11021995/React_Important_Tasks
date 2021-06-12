import React, { Component } from "react";
import Userlist from "./userlist";

class Props12 extends Component {
  constructor() {
    super();
    this.state = {
      item: [
        {
          name: "Ganesh",
          mobile: 99999999,
          city: "Mumbai",
          age: "20 Years",
          pic: "1.jpg",
        },
        {
          name: "Ramesh",
          mobile: 99998999,
          city: "Bangalore",
          age: "21 Years",
          pic: "2.jpg",
        },
        {
          name: "sir",
          mobile: 999769999,
          city: "Pune",
          age: "22 Years",
          pic: "3.jpg",
        },
        {
          name: "linux",
          mobile: 995559999,
          city: "Bangalore",
          age: "20 Years",
          pic: "1.jpg",
        },
        {
          name: "Sai",
          mobile: 999449999,
          city: "Hyderabad",
          age: "24 Years",
          pic: "2.jpg",
        },
        {
          name: "Vikram",
          mobile: 9939999,
          city: "Bangalore",
          age: "23 Years",
          pic: "3.jpg",
        },
        {
          name: "Kalyan",
          mobile: 91119999,
          city: "Bangalore",
          age: "25 Years",
          pic: "1.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>{this.state.item.length} - Props Example</h2>
          </div>
        </div>
        <div className="row">
          {this.state.item.map((xuser, index) => {
            return (
              <Userlist
                key={index}
                fullname={xuser.name}
                mobileno={xuser.mobile}
                cityname={xuser.city}
                age={xuser.age}
                photo={xuser.pic}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Props12;
