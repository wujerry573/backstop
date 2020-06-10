import { createStore } from "redux";
import reducer from "./reducers";

const initialState = {
  pokemon: [],
  randomPokemon: {},
};

const store = createStore(reducer, initialState);

export default store;
