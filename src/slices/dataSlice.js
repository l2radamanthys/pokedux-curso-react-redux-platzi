import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.id == action.payload.pokemonId
      );
      if (currentPokemonIndex != -1) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setPokemon, setFavorite } = dataSlice.actions;
