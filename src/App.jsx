import React from "react";
import { Searcher } from "./components/Searcher";
import { Col } from "antd";
import { PokemonList } from "./components/PokemonList";
import logo from "./assets/logo.svg";
import "./App.css";
import { getPokemons, getPokemonDetail } from "./api";
import { setPokemons } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsResponse = await getPokemons();
      const pokemonsDetailed = await Promise.all(
        pokemonsResponse.map((pokemon) => getPokemonDetail(pokemon))
      );
      dispatch(setPokemons(pokemonsDetailed));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons || []} />
    </div>
  );
}

export default App;
