import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/storeRedux";
import {Provider} from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
        <App
          // state={state}
          // dispatch={store.dispatch.bind(store)}
          //   store={store}
          />
          </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
  reportWebVitals();
};

rerenderEntireTree(store.getState());
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });
