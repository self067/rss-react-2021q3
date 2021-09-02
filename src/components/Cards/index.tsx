import React, { FC } from 'react';
import Card from 'components/Card';
import CardsWrap from './styled';

interface IAnimal {
  id: React.Key;
  description: string;
  image: string;
  species: string;
  name: string;
  country: string;
}
interface IAnimals {
  animals: IAnimal[];
}

interface IData {
  data: IAnimals;
}

const Cards: FC<IData> = ({ data }: IData) => {
  const { animals } = data;

  return (
    <CardsWrap>
      {animals.map(
        (a: {
          id: React.Key;
          description: string;
          image: string;
          species: string;
          name: string;
          country: string;
        }) => (
          <Card
            key={a.id}
            description={a.description}
            image={a.image}
            species={a.species}
            name={a.name}
            country={a.country}
          />
        )
      )}
    </CardsWrap>
  );
};

export default Cards;
