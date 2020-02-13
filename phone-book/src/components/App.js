import React, { Component } from "react";
import "./App.css";
import Contacts from "./Contacts";

class App extends Component {
  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
  }
  state = {
    contacts: [
      {
        name: "Sandra Maia",
        phone: "111111111"
      },
      {
        name: "Larissa Maia",
        phone: "222222222"
      },
      {
        name: "Paula Camila",
        phone: "333333333"
      },
      {
        name: "Paulo Tirisseiro",
        phone: "444444444"
      }
    ]
  };

  addContact(contact) {
    console.log("contato para ser adicionado", contact);
    const { contacts } = this.state;
    contacts.push(contact);

    //update the state
    this.setState({
      contacts
    });
  }

  render() {
    console.log(this.state.contacts);
    return (
      <div className="App">
        <Contacts contact={this.state.contacts} addContact={this.addContact} />
      </div>
    );
  }
}

export default App;
