import React from "react";
import { Searcher } from "./components/Searcher";
import { Col, Spin } from "antd";
import { PokemonList } from "./components/PokemonList";
import logo from "./assets/logo.svg";
import "./App.css";
import { getPokemons } from "./api";
import { getPokemonWithDetail, setLoading } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.get("pokemons").toJS());
  const loading = useSelector((state) => state.get("loading"));
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsResponse = await getPokemons();
      dispatch(getPokemonWithDetail(pokemonsResponse));
      dispatch(setLoading(false));
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
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons || []} />
      )}
    </div>
  );
}

export default App;
