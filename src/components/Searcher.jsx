import React from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { filterPokemons } from "../slices/dataSlice";

const Searcher = () => {
  const dispatch = useDispatch();

  const onSearch = (value) => {
    dispatch(filterPokemons(value));
  };

  return (
    <Input.Search
      placeholder="Buscar Pokemon..."
      style={{ marginBottom: "3rem" }}
      onSearch={onSearch}
    />
  );
};

export { Searcher };
