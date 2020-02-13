import React from "react";
import mock from "./mock";

function handleClick(index) {
  console.log(index);
}

const contatos = mock;
const orderContacts = contatos.sort((a, b) => a.name < b.name && -1);
const GerarLista = props => {
  const gerarItens = itens => {
    return itens.map((item, index) => (
      <div
        style={{ display: "flex", flexDirection: "row" }}
        key={`item-${index}`}
      >
        <div onClick={() => handleClick(index)}>{item.name}</div>
      </div>
    ));
  };
  return <ul>{gerarItens(orderContacts)}</ul>;
};

export default GerarLista;
