import React from "react";
import { PokemonCard } from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons = Array(10).fill("") }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            order={pokemon.order}
            pokemonId={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types.map((type) => type.type.name)}
            isFavorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};

export { PokemonList };
