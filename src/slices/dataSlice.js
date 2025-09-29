import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons, getPokemonDetail } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonsResponse = await getPokemons();
    const pokemonsDetailed = await Promise.all(
      pokemonsResponse.map((pokemon) => getPokemonDetail(pokemon))
    );
    dispatch(setPokemon(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.pokemons = action.payload;
      state.filteredPokemons = action.payload;
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
    filterPokemons: (state, action) => {
      const searchValue = action.payload.toLowerCase();
      if (searchValue.length > 0) {
        state.filteredPokemons = state.pokemons.filter(
          (pokemon) => pokemon.name.toLowerCase() === searchValue
        );
      } else {
        state.filteredPokemons = [...state.pokemons];
      }
    },
  },
});

export const { setPokemon, setFavorite, filterPokemons } = dataSlice.actions;
console.log("🚀 ~ file: dataSlice.js ~ line 29 ~ dataSlice", dataSlice);
export default dataSlice.reducer;
