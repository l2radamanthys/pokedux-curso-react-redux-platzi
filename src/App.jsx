import React from "react";
import { Searcher } from "./components/Searcher";
import { Col } from "antd";
import { PokemonList } from "./components/PokemonList";
import logo from "./assets/logo.svg";
import "./App.css";
import { getPokemons } from "./api";

function App() {
  const [pokemons, setPokemons] = React.useState([]);
  React.useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsResponse = await getPokemons();
      setPokemons(pokemonsResponse);
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
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
