import React, { useState, useEffect } from "react";

function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);
    return () => navigator.geolocation.clearWatch(watchId);
  }, []); // erro, nao precisa botar array vazio

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;
    setLocation({ latitude, longitude });
  }

  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  );
}

export default App;
// Resumo :
// componeteDidMount(apenas uma vez, carregar dados de api)
// componentDidUpDate(consigo monitorar quando informaçoes do estado ou de proriedades alteram, para poder executar algumas funçoes )
// componentWillUnMount(podemos criar para cada useEffect que criamos)toda vez que temos um return dentor do useEffect, ele é executado assim que o componente for desmontado
// AO invez de um unico state dentro de um componente  que contem todas informçoes que aquele componente pode manipular
// com Hooks temos unico useStae para cada tipo de informação que queremos manipular
// class App extends Component{
//   state = {};

//   this.setState}

//  state = {
//     repositories: []
//   }

// armazenar uma lista de repositorios que a gente busca no github

// criamos uma variavel no estado chamada repositories e
//toda vez que ela atualizar o nosso render abaixo irá se executar automaticamente
// para garantir colocamos um botão em um fragment com uma funçao(essa funcao fica escopada) dentro do onclick
// Até agora fizemos coisas bem estáticas, nao usamos metodos de ciclo de vida
//useeffect é  = ComponentDidmount ComponentDidUpdate ComponentWillUnmount
//quero carregar essas informações de repositorios da minha API do gitHub

// function handleAddRepositories() {
//   setRepositories([
//     ...repositories,
//     { id: Math.random(), name: "Novo repo" }
//   ]);
// }

// conseguimos fazer essa atualização
//suponhamos que eu queira marcar repositórios como favorito, criando u, butto n dentro da li

//   const [repositories, setRepositories] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(
//         "https://api.github.com/users/gealcan/repos"
//       );
//       const data = await response.json();
//       setRepositories(data);
//     }
//     fetchData();
//   }, []); // [] somente load inicial

//   useEffect(() => {
//     const filtered = repositories.filter(repo => repo.favorite);
//     document.title = `Você tem ${filtered.length} favoritos`;
//   }, [repositories]);

//   function handleFavorite(id) {
//     const newRepositories = repositories.map(repo => {
//       return repo.id === id ? { ...repo, favorite: true } : repo;
//     });

//     setRepositories(newRepositories);
//   }

//   return (
//     <ul>
//       {repositories.map(repo => (
//         <li key={repo.id}>
//           {repo.name}
//           {repo.favorite && <span> (favorito)</span>}
//           <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
//         </li>
//       ))}
//     </ul>
//   );
// }
