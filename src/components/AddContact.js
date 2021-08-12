import React, { Component } from "react";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }

    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div style={{ marginTop: "50px" }} className="ui main ">
        <h2 style={{ textAlign: "center" }}>Add Contact</h2>
        <form onSubmit={this.add} className="ui form">
          <div className="field">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
              id=""
            />
          </div>
          <div className="field">
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
              name="email"
              placeholder="email"
              id=""
            />
          </div>
          <button className="ui button blue">ADD CONTACT</button>
        </form>
      </div>
    );
  }
}
