import React, { Component } from "react";
import "./List.css";
import PropTypes from "prop-types";

export default class List extends Component {
  static propTypes = {
    contact: PropTypes.array.isRequired
  };

  render() {
    // console.log("Incoming Props: ", this.props);
    return (
      <div className={"listArea"}>
        <input
          name={"filter"}
          id={"filter"}
          placeholder={"Filtre por nome ou telefone"}
        />
        <ul className={"list"}>
          {this.props.contact.map(contact => (
            <li key={contact.phone}>
              <span className={"name"}>{contact.name}</span>
              <span className={"phone"}>{contact.phone}</span>
              <span className={"clearfix"}></span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
