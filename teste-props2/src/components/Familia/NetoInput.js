import React, { useState } from "react";
import styled from "styled-components";

const NetoStyle = styled.div`
  margin: auto;
  height: 200px;
  width: 200px;
  border: 2px solid #333;
  background: #afa;

  div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  input {
    height: 40px;
    border-radius: 4px;
    text-align: center;
  }
  button {
    margin-top: 20px;
    width: 80px;
    background-color: black;
    color: #fff;
  }
`;

function Neto({ handleClick, sobrenome }) {
  const [state, setState] = useState("");
  const handleOnClick = value => {
    handleClick(value);
    setState("");
  };

  return (
    <NetoStyle>
      <strong>{state}</strong>
      <div>
        <input
          value={state}
          type="text"
          placeholder="Digite um nome"
          onChange={e => setState(e.target.value)}
        />
        <button onClick={() => handleOnClick(state)}>Submit</button>
        <p>`Meu sobrenome é : {sobrenome}`</p>
      </div>
    </NetoStyle>
  );
}

export default Neto;
