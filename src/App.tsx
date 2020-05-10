import React from "react";
import { Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./components/home";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif;
    font-size:16px;
    line-height: 1.2;
    background-color:#eee;
    color: #222;
    padding:0;
    margin:0;

    input, textarea{
      font-family: 'Open Sans', sans-serif;
      font-size:16px;
      line-height: 1.2;
    }
  }
`;

interface AppInterface {}

function App(props: AppInterface) {
  console.log("render: app.tsx");
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route render={() => <h1>404 Error</h1>} />
      </Switch>
    </>
  );
}

export default App;
