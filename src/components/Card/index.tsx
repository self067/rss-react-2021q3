import React from 'react';
import { CardWrap, CardImage, CardDescription } from './styled';

interface ICard {
  id: number;
  name: string;
  image: string;
  species: string;
  description: string;
}

const Card: FC = ({ item }) => {
  const { id, description, image, species, name }: ICard = item;
  const im = `public/images/${image}`;
  return (
    <CardWrap>
      <div>{name}</div>
      <div>{species}</div>
      <CardImage src={im} alt={image} /> <CardDescription>{description}</CardDescription>
    </CardWrap>
  );
};
export default Card;
