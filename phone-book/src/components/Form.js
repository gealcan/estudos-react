import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Form extends Component {
  constructor() {
    super();
    //method bind
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    addContact: PropTypes.func
  };

  state = {
    name: "",
    phone: ""
  };

  onSubmit(event) {
    event.preventDefault();
    this.props.addContact({ ...this.state });

    // console.log("OnSubmit working");
    // clean the fields
    this.setState({
      name: "",
      phone: ""
    });
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log("state", this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name="name"
            id="name"
            placeholder="Digite um nome"
            value={this.state.name}
            onChange={this.onChange}
          />
          <br />
          <input
            name="phone"
            id="phone"
            placeholder="Digite um telefone"
            value={this.state.phone}
            onChange={this.onChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
