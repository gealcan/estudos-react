import React, { useState } from "react";
import { Filho } from "./FilhoState";
import styled from "styled-components";

const PaiStyle = styled.div`
  margin: auto;
  height: 400px;
  width: 400px;
  background-color: blue;
  border: 2px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Pai({ sobreNomeProps }) {
  const [state, setState] = useState("");
  const [sobrenome, setSobrenome] = useState(sobreNomeProps);
  const handleStatePai = value => setState(value);

  return (
    <PaiStyle>
      <strong>{state}</strong>
      <p>`Meu sobrenome é : {sobreNomeProps}`</p>
      <Filho sobreNomeFamilia={sobrenome} handleState={handleStatePai} />
    </PaiStyle>
  );
}

export { Pai };
