import React, { FC } from 'react';
import { CardWrap, CardImage, CardDescription, CardInfo } from './styled';

interface ICard {
  name: string;
  image: string;
  species: string;
  description: string;
  country: string;
}

const Card: FC<ICard> = ({ description, image, species, name, country }: ICard) => {
  const imageSource = `public/images/${image}`;
  return (
    <CardWrap>
      <CardImage src={imageSource} alt={image} />{' '}
      <CardInfo>
        <p>
          {name} - {species}
        </p>
        <p>Country: {country}</p>
      </CardInfo>
      <CardDescription>{description}</CardDescription>
    </CardWrap>
  );
};
export default Card;
