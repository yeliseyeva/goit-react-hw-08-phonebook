import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

//ReactDOM.render(
//<React.StrictMode>
//<Provider store={store.store}>
//<PersistGate loading={null} persistor={store.persistor}>
//<App />
//</PersistGate>
//</Provider>
//</React.StrictMode>,
//document.getElementById("root")
//);