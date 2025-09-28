import React from "react";
import { Input } from "antd";

const Searcher = () => {
  return (
    <Input.Search
      placeholder="Buscar Pokemon..."
      style={{ marginBottom: "3rem" }}
    />
  );
};

export { Searcher };
