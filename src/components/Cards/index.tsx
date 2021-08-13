import React from 'react';
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

const Cards: React.FC<IData> = ({ data }: IData) => {
  const ani = data.animals;

  return (
    <CardsWrap>
      {ani.map(
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
            // id={a.id}
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
