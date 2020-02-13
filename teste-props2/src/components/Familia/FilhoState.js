import React, { useState, useEffect } from "react";
import { Neto } from "./NetoInput";
import styled from "styled-components";

const FilhoStyle = styled.div`
  margin: auto;
  height: 300px;
  width: 300px;
  background-color: red;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function Filho({ handleState, sobreNomeFamilia }) {
  const [state, setState] = useState("");
  const changeStatePai = value => setState(value);
  useEffect(() => {
    handleState(state);
    return () => {};
  }, [handleState, state]);
  return (
    <FilhoStyle>
      <strong>{state}</strong>
      <p>`Meu sobrenome é : {sobreNomeFamilia}`</p>
      <Neto sobrenome={sobreNomeFamilia} handleClick={changeStatePai} />
    </FilhoStyle>
  );
}

export { Filho };
