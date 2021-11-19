import './global.scss'
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import MyProducts from "./pages/MyProducts/MyProducts";
import MySales from "./pages/MySales/MySales";
import Personal from "./pages/Personal/Personal";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/my-products">
            <MyProducts />
          </Route>
          <Route exact path="/my-sales">
            <MySales />
          </Route>
          <Route exact path="/personal">
            <Personal />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
