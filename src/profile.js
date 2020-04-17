import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Profile extends Component {
  constructor() {
    super();
    const userData = localStorage.getItem("profile");
    if (!userData) {
      localStorage.setItem(
        "profile",
        JSON.stringify([
          {
            name: "Rajat Talwar",
            age: 34,
            friend: `Ricky, Richmond, Nicky`,
          },
        ])
      );
    } else {
      this.state = {
        user: JSON.parse(userData),
      };
    }
  }

  render() {
    return (
      <div className="home">
        <h3>Profile</h3>
        <div className="user-info">
          <div className="left-panel">
            <div className="header">
              <h4>Name</h4>
            </div>
            {Object.keys(this.state.user[0]).map((item, index) => {
              return (
                <div className="value" key={index}>
                  <span>
                    <b>{item}</b>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="right-panel">
            <div className="header">
              <h4>Value</h4>
            </div>
            {Object.keys(this.state.user[0]).map((item, index) => {
              return (
                <div className="value" key={index}>
                  <span>{this.state.user[0][item]}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="action-btn">
          <Link to="/edit-profile">Edit Profile</Link>
        </div>
      </div>
    );
  }
}

export default Profile;
