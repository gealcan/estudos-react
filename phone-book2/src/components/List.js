import React from "react";

const randomColor = () => {
  let hexadecimais = "0123456789ABCDEF";
  let cor = "#";

  // Pega um número aleatório no array acima
  for (let i = 0; i < 6; i++) {
    //E concatena à variável cor
    cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
};

const ListContacts = ({ contatos }) => {
  const orderContacts = contatos.sort((a, b) => a.name < b.name && -1);
  const letra = element => element.substr(0, 1);

  return <ul>
    {orderContacts.map((item, index) => (
      <div
        style={{ display: "flex", flexDirection: "row" }}
        key={`item-${index}`} // nao entendi a sintaxe
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "100px"
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 10
            }}
          >
            <p
              style={{
                height: 30,
                width: 30,
                backgroundColor: randomColor(),
                borderRadius: "50%",
                color: "rgb(238, 230, 230)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4em",
                margin: 0
              }}
            >
              {letra(item.name)}
            </p>
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px"
            }}
          >
            {item.name}
          </span>
        </div>
      </div>
    ))}
  </ul>;
};

export default ListContacts;

// export default class List extends Component {
//   render() {
//     return (

//     );
//   }
// }

// <div
//     style={{
//       listStyle: "none"
//     }}
//   >
//     <ul>
//       <li
//         style={{ display: "flex", alignItems: "center", paddingLeft: 40 }}
//       >
//         <span
//           style={{
//             display: "flex",
//             alignItems: "center",
//             marginTop: 10,
//             paddingLeft: 20
//           }}
//         >
//           <p
//             style={{
//               height: 30,
//               width: 30,
//               backgroundColor: "green",
//               borderRadius: "50%",
//               color: "rgb(238, 230, 230)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: "1.4em",
//               margin: 0
//             }}
//           >
//             A
//           </p>
//         </span>
//         <strong style={{ marginLeft: 5 }}></strong>
//       </li>
//       <li
//         style={{
//           display: "flex",
//           alignItems: "center",
//           marginTop: 10,
//           paddingLeft: 60
//         }}
//       >
//         <span style={{}}>
//           <p
//             style={{
//               height: 30,
//               width: 30,
//               backgroundColor: "coral",
//               borderRadius: "50%",
//               color: "rgb(238, 230, 230)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: "1.4em",
//               margin: 0
//             }}
//           >
//             B
//           </p>
//         </span>
//         <strong style={{ marginLeft: 5 }}>Bia</strong>
//       </li>
//     </ul>
//   </div>
