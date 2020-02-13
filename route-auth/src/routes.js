import React from "react";
import { isAuthenticated } from "./auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// BrowserRouter por volta de tudo,   da habilidade para nossas rotas trabalharem  com o navigation state do browser, URL(entender e manipular)
// Switch tras uma funcionalidade que nao deixa mais de uma rota ser chamada ao mesmo tempo
//primeira Route com o path /.  // exact garante que a rota seja extaamente essa /
// vamos criar dois componehtes novos PrivateRoute
// Privateroute quero que seje a mesma coisa que o Route
//porem o usuário so consegue aacessar a tela se tiver autenticado
// Privateroute é uma função que vai retornar uma Route
// conseguimos receber as propriedades do route , e tb com o ...rest
// Não entendi pq do Component maiusculo nas props !!!
// Passo todas as props para a Route com {...rest}
// redefino o método render da Route recebendo nossas props
// se estiver o user está Autenticado , voun renderizar o Componente
// com todas as props que passamos para ele
//se NAO , vou REDIRECT ele para a rota raiz '/'
// e mandamos o state com o histórico de navegação

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Hello World</h1>} />
      <PrivateRoute path="/app" component={() => <h1>Voçê está logado</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
