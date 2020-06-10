import { GET_POKEMON, GET_RANDOM_POKEMON } from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return { ...state, pokemon: [...state.pokemon, action.payload] };

    case GET_RANDOM_POKEMON:
      return { ...state, randomPokemon: action.payload };

    default:
      return state;
  }
};

export default reducer;
