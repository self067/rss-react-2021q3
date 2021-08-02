import React from 'react';
import { CardWrap, CardImage, CardDescription, CardInfo } from './styled';

interface ICard {
  id: number;
  name: string;
  image: string;
  species: string;
  description: string;
  country: string;
}

const Card: FC = ({ item }) => {
  const { id, description, image, species, name, country }: ICard = item;
  const im = `public/images/${image}`;
  return (
    <CardWrap>
      <CardImage src={im} alt={image} />{' '}
      <CardInfo>
        <div>
          {name} - {species}
        </div>
        <div>Country: {country}</div>
      </CardInfo>
      <CardDescription>{description}</CardDescription>
    </CardWrap>
  );
};
export default Card;
