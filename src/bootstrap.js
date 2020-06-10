import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./components/home";
import Results from "./components/results";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/results" component={Results} />
      </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
