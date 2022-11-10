import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/state";
const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
          store={store}
                  />
      </BrowserRouter>
    </React.StrictMode>
  );
  reportWebVitals();
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
