import React from "react";
import "./assets/css/base/base.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import PageNotFound from "./paginas/PageNotFound";
import Cabecalho from './components/Cabecalho'
import Post from './paginas/Post'
import Categoria from './paginas/Categoria'

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/categoria/:id">
          <Categoria />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
