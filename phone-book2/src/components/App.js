import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import List from "./List";
import Filtro from "./Filtro";
import mock from "./mock";

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

const App = () => {
  const [value, setValue] = useState("");
  const [contatosFiltrados, setContatosFiltrados] = useState([]);

  let contatos = mock;
  useEffect(() => {
    let novosContatos = searchContacts(value, contatos);

    setContatosFiltrados(novosContatos);
  }, [contatos, value]);

  if (contatosFiltrados.length > 0 || value.length > 0) {
    contatos = contatosFiltrados;
  }

  function searchContacts(valor, contacts) {
    // [^\w\s!?] remove non-characters/non-numbers and /\b/g replace white spaces to '.*'
    const newString = valor
      .toUpperCase()
      .trim()
      .replace(/[^\w\s!?]/g, "") // removes non-characters/non-numbers
      .replace(/\b/g, ".*"); // replaces white spaces to '.*', so we search the whole string
    const regex = new RegExp(newString, "gm");
    const matchedContacts = contacts.filter(contato => {
      return contato.name
        .toUpperCase()
        .trim()
        .replace(" ", "")
        .match(regex);
    });
    console.log(matchedContacts);
    return matchedContacts;
  }
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
      <List contatos={contatos} /> {/* pode ter 2 nomes iguais? */}
    </div>
  );
};
export default App;
