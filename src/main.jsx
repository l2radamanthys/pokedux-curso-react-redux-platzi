import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { loggerMiddleware } from "./middleware/index.js";
import { thunk } from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer.js";

const root = createRoot(document.getElementById("root"));
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhacers = composeAlt(applyMiddleware(thunk, loggerMiddleware));
const store = createStore(rootReducer, composedEnhacers);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
