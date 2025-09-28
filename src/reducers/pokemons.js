import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_FAVORITE:
      const newPokemonsLIst = [...state.pokemons];
      const currentPokemonIndex = newPokemonsLIst.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });
      newPokemonsLIst[currentPokemonIndex].favorite =
        !newPokemonsLIst[currentPokemonIndex].favorite;
      if (currentPokemonIndex == -1) {
        return state;
      } else {
        return { ...state, pokemons: newPokemonsLIst };
      }
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
