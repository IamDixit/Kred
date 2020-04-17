import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class EditProfile extends Component {
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
        addRecord: false,
        newKey: "",
        newValue: "",
        user: JSON.parse(userData),
      };
    }
  }
  addRecord = () => {
    this.setState({
      addRecord: !this.state.addRecord,
      newValue: "",
      newKey: "",
    });
  };
  delete = (key) => {
    const data = this.state.user.slice();
    delete data[0][key];
    this.setState({
      user: data,
    });
    localStorage.setItem("profile", JSON.stringify(data));
  };
  handleKeyChange = (event) => {
    this.setState({
      newKey: event.target.value,
    });
  };
  getKey = () => {
    if (this.state.newKey) {
      if (Object.keys(this.state.user[0]).includes(this.state.newKey)) {
        alert("Error! Duplicate key");
      }
    }
  };
  handleValueChange = (event) => {
    this.setState({
      newValue: event.target.value,
    });
  };
  getValue = () => {
    if (this.state.newValue) {
      const data = this.state.user.slice();
      data[0][this.state.newKey] = this.state.newValue;
      this.setState({
        user: data,
        addRecord: false,
      });
      localStorage.setItem("profile", JSON.stringify(data));
    }
  };
  render() {
    return (
      <div className="home">
        <h3>Edit Profile</h3>
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
            {this.state.addRecord ? (
              <input
                type="text"
                className="input-key"
                value={this.state.newKey}
                placeholder="Enter Key"
                autoFocus={true}
                onChange={this.handleKeyChange}
                onBlur={this.getKey}
              />
            ) : null}
          </div>
          <div className="right-panel">
            <div className="header">
              <h4>Value</h4>
            </div>
            {Object.keys(this.state.user[0]).map((item, index) => {
              return (
                <div className="value" key={index}>
                  <>
                    <span className="user-value">
                      {this.state.user[0][item]}
                    </span>
                    <button
                      onClick={this.delete.bind(this, item)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </>
                </div>
              );
            })}
            {this.state.addRecord ? (
              <input
                type="text"
                className="input-value"
                value={this.state.newValue}
                placeholder="Enter Value"
                onChange={this.handleValueChange}
                onBlur={this.getValue}
              />
            ) : null}
          </div>
        </div>
        <div className="action-btn">
          <button onClick={this.addRecord}>
            {this.state.addRecord ? "Done" : "Add Record"}
          </button>
        </div>
        <div className="action-btn">
          <Link to="/">Back</Link>
        </div>
      </div>
    );
  }
}

export default EditProfile;
