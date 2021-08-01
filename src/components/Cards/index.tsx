import React from 'react';
import Card from 'components/Card';
import CardsWrap from './styled';

const Cards = ({ data }) => {
  const ani = data.animals;
  console.log(ani);

  return (
    <CardsWrap>
      {ani.map(a => (
        <Card key={a.id} item={a} />
      ))}
    </CardsWrap>
  );
};

export default Cards;
