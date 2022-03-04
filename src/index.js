import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//Import Provider
import { Provider } from "react-redux";
//importing create store
import { createStore } from "redux";
//importing reducer(s)
import { reducer } from "./redux_setup/reducer.js";
// create store
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
