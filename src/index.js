import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import I18n from "redux-i18n";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import Loading from "./components/loading/Loading";

import { store, persistor } from "./store/CombinedReducers";
import { translations } from "./transaltions/Translation";
ReactDOM.render(
  <Provider store={store}>
    <I18n translations={translations}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </I18n>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
