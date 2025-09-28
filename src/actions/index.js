import { SET_POKEMONS, SET_LOADING } from "./types";
import { getPokemonDetail } from "../api";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const getPokemonWithDetail =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetail(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
  };

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
