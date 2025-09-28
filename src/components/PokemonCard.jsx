import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarButton } from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

const PokemonCard = ({ pokemonId, order, name, image, types, isFavorite }) => {
  const dispatch = useDispatch();
  const title = `${order} ${capitalize(name)}`;
  const typesString = types.join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId }));
  };

  return (
    <Card
      title={title}
      cover={<img draggable={false} alt={name} src={image} />}
      extra={<StarButton isFavorite={isFavorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typesString} />
    </Card>
  );
};

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export { PokemonCard };
