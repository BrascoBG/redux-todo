import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import classReducer from "./store/reducers/classReducer";
import functReducer from "./store/reducers/functReducer";

const rootReducers = combineReducers({
  classRed: classReducer,
  functRed: functReducer,
});

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  console.log("Subscription", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
