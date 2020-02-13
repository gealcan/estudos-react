import React, { useState } from "react";
import styled from "styled-components";
import Filho from "./FilhoState";

const PaiStyle = styled.div`
  margin: auto;
  width: 600px;
  height: 600px;
  display: flex;
  align-content: center;
  justify-content: center;
  border: 2px solid #333;
  background: #aaf;
`;
const Pai = ({ sobreNomeProps }) => {
  const [state, setState] = useState("");
  const [sobreNome, setSobreNome] = useState(sobreNomeProps);
  const handleStatePai = value => setState(value);
  return (
    <PaiStyle> Meu sobrenome é: {sobreNomeProps}
      <strong>{state}</strong>
      <Filho sobrenomeFamilia={sobreNome} handleState={handleStatePai} />
    </PaiStyle>
  );
};
export default Pai;