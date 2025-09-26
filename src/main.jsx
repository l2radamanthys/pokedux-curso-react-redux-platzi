import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { pokemonsReducer } from "./reducers/pokemons.js";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

const store = createStore(pokemonsReducer);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
