import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import { Navbar, Home, Config, Connections, Help, Robots } from "./components";

const App = styled.div({
  width: "100%",
  color: "white",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  background: "linear-gradient(to right, #0f2027, #203a43, #2c5364);",
});

const pages = [
  { title: "Inicio", address: "/", Component: Home },
  { title: "Meus Robos", address: "/robots", Component: Robots },
  { title: "Conexao", address: "/connections", Component: Connections },
  { title: "Ajuda", address: "/help", Component: Help },
  { title: "Configuraçao", address: "/config", Component: Config },
];

ReactDOM.render(
  <HashRouter>
    <App>
      <Navbar pages={pages}/>
      <Switch>
         {pages.map(({address, Component}, index) =>
        <Route exact path={address} key={index} component={ Component }/>
      )}
      </Switch>
    </App>
  </HashRouter>,
  document.getElementById("app")
);
