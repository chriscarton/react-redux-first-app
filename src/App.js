import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./css/main.css";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, login } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const logged = useSelector(state => state.login);
  const dispatch = useDispatch();

  return (
    <div className="App container">
      <div className="jumbotron">
        <h1>Première App React / Redux</h1>
        <p className="lead">Surtout redux...</p>
      </div>
      <div id="Counter" className="text-center">
        {counter}
      </div>
      <div className="text-center">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className="text-center mt-1">
        {logged ? (
          <h1>Vous êtes connecté</h1>
        ) : (
          <button
            onClick={() => dispatch(login())}
            className="btn btn-secondary"
          >
            Se connecter
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
