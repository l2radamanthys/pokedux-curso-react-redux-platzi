import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "./types";
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

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});
