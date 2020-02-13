import React, { useState } from "react";
import styled from "styled-components";
const NetoStyle = styled.div`
  margin: auto;
  width: 200px;
  height: 200px;
  border: 2px solid #333;
  background: #afa;
  div {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  input {
    height: 40px;
    border-radius: 5px;
  }
  button {
    margin-top: 20px;
    height: 40px;
    border-radius: 5px;
  }
`;
const Neto = ({ handleClick, sobrenomeFamilia }) => {
  const [state, setState] = useState("");
  const handleOnClick = value => {
    handleClick(value);
    setState("")
  };
  return (
    <NetoStyle>
      <strong>{state}</strong>
      <div>
        <input
          value={state}
          onChange={e => setState(e.target.value)}  // duvida, porque e.target/onChange e embaixo ()/onClick
          type="text"
        />
        <button onClick={() => handleOnClick(state)}>Submit</button>
        <p>Meu sobrenome é {sobrenomeFamilia}</p>
      </div>
    </NetoStyle>
  );
};
export default Neto;

// DUVIDA, Como é a ordem de arquitetura dos componentes