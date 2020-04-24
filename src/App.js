import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Form from "./Form";
import "./index.css";
import Home from "./Home"

const App = () => {
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <a href="/">Home</a>
        <a>Order Form</a>
      </header>
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/pizza'>
        <Form />
      </Route>
    </>
  );
};
export default App;
