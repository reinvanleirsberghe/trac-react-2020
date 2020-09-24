import React from "react";
import ReactDOM from "react-dom";
import Movies from "./modules/movies";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

import "./styles.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Movies />
    </div>
  );
}

const rootElement = document.getElementById("root");
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
