import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Neto from "./NetoInput";
const FilhoStyle = styled.div`
  margin: auto;
  width: 400px;
  height: 400px;
  display: flex;
  align-content: center;
  justify-content: center;
  border: 2px solid #333;
  background: #faa;
`;
const Filho = ({ handleState, sobrenomeFamilia }) => {
  const [state, setState] = useState("");
  const changeStatePai = value => setState(value);
  useEffect(() => {
    handleState(state);
    return () => { };
  }, [handleState, state]); //
  return (
    <FilhoStyle>
      <strong>{state}</strong>
      <Neto sobrenomeFamilia={sobrenomeFamilia} handleClick={changeStatePai} />
      <p>Meu sobrenome é {sobrenomeFamilia}</p>
    </FilhoStyle>
  );
};
export default Filho;