import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // here we're importing from react redux to wrap the component with the provider component

import "./index.css";
import App from "./App";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

//here we wrapped the app component with the provider component so we give access to all app child components (that's not necessary if you don't need it on the app level)
root.render(
  // we use the default store prop here on the provider to let it know which store we will use here
  <Provider store={store}>
    <App />
  </Provider>
);
