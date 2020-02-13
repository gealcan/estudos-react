import React, { Component } from "react";
import List from "./List";
import Form from "./Form";
import PropTypes from "prop-types";

export default class Contacts extends Component {
  // state = {
  //   contact: [
  //     {
  //       name: "Sandra Maia",
  //       phone: "111111111"
  //     },
  //     {
  //       name: "Larissa Maia",
  //       phone: "222222222"
  //     },
  //     {
  //       name: "Paula Camila",
  //       phone: "333333333"
  //     },
  //     {
  //       name: "Paulo Tirisseiro",
  //       phone: "444444444"
  //     }
  //   ]
  // };

  static propTypes = {
    contact: PropTypes.array.isRequired,
    addContact: PropTypes.func
  };

  render() {
    // console.log("Props indo para o componente contato:", this.props);
    return (
      <div>
        <h1> Meu componente Contatos</h1>
        <List contact={this.props.contact} />
        <Form addContact={this.props.addContact} />
      </div>
    );
  }
}
