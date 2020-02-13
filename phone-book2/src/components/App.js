import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import List from "./List";
import Filtro from "./Filtro";
import contatos from "./mock";

const style = {
  container: {
    height: 500,
    width: 300
  },
  header: {
    height: "25%",
    width: "100%",
    backgroundColor: "blue"
  }
};

const searchContacts = (valor, contacts) => contacts.filter(d => (
  d.name.toLowerCase()
    .includes(valor.toLowerCase())
))

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div style={style.container}>
      <header style={style.header}>
        <Filtro onChange={setValue} value={value} />
        <FontAwesomeIcon
          style={{ position: "relative", left: 250, top: 100 }}
          color="white"
          icon={faUserFriends}
        />
      </header>
      <List contatos={searchContacts(value, contatos)} /> {/* pode ter 2 nomes iguais? */}
    </div>
  );
};
export default App;
