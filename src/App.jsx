import React from "react";
import { Searcher } from "./components/Searcher";
import { Col } from "antd";
import { PokemonList } from "./components/PokemonList";

function App() {
  return (
    <>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </>
  );
}

export default App;
