import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarButton } from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

const PokemonCard = ({ pokemonId, order, name, image, types, isFavorite }) => {
  const dispatch = useDispatch();
  const typesString = types.join(", ");

  const handleOnFavorite = () => {
    console.log("click");
    dispatch(setFavorite({ pokemonId }));
  };

  return (
    <Card
      title={`${order} ${name}`}
      cover={<img draggable={false} alt={name} src={image} />}
      extra={<StarButton isFavorite={isFavorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typesString} />
    </Card>
  );
};

export { PokemonCard };
