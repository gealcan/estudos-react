import React from "react";
import Filho from "./Filho";

// export default props => {
//   const notificarSaidaFilho = lugar => alert(`Vou sair para ${lugar}`);
//   return (
//     <div>
//       <Filho notificarSaida={notificarSaidaFilho} />
//     </div>
//   );
// };

// const Pai = props => {
//   const notificarSaidaFilho = lugar => alert(`Vou sair para ${lugar}`);
//   return (
//     <div>
//       <Filho notificarSaida={notificarSaidaFilho} />
//     </div>
//   );
// };

function Pai() {
  const notificarSaidaFilho = lugar => alert(`Vou sair para ${lugar}`);
  return (
    <div>
      <Filho notificarSaida={notificarSaidaFilho} />
    </div>
  );
}

export default Pai;
