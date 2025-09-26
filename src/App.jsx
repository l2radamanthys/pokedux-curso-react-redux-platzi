import React from "react";
import { Searcher } from "./components/Searcher";
import { Col } from "antd";
import { PokemonList } from "./components/PokemonList";
import logo from "./assets/logo.svg";
import "./App.css";
import { getPokemons } from "./api";
import { connect } from "react-redux";
import { setPokemons as setPokemonsActions } from "./actions";

function App({ pokemons, setPokemons }) {
  console.log(pokemons);
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
      <PokemonList pokemons={pokemons || []} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
