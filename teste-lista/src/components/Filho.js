import React from "react";

// function Filho(props) {
//   return (
//     <div>
//       <button onClick={() => props.notificarSaida("Praia")}>Vou sair!</button>
//     </div>
//   );
// }

// export default Filho;

const Filho = props => {
  return (
    <div>
      <button onClick={() => props.notificarSaida("China")}>Vou Sair</button>
    </div>
  );
};

export default Filho;
