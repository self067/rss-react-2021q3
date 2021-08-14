import React from 'react';

import { FormsWrapper, FormCard, FormItem, FormItemName, FormLink } from './styled';

const SearchResult: React.FC<ISearchCards> = ({ docs = [] }: ISearchCards) => (
  <FormsWrapper>
    {docs.map((f: ISearch) => (
      <FormCard key={f._id} id={f._id}>
        <FormLink to={`/details/${f._id}`}>
          <FormItemName> name: {f.name}</FormItemName>
          <FormItem> birth: {f.birth}</FormItem>
          <FormItem> death: {f.death}</FormItem>
          <FormItem> gender: {f.gender}</FormItem>
          <FormItem> hair: {f.hair}</FormItem>
          <FormItem> height: {f.height}</FormItem>
          <FormItem> race: {f.race}</FormItem>
        </FormLink>
        <FormItem>
          {f.wikiUrl ? (
            <a href={f.wikiUrl} target="blank">
              WikiUrl
            </a>
          ) : (
            <div>no link</div>
          )}
        </FormItem>
      </FormCard>
    ))}
  </FormsWrapper>
);

export default SearchResult;
