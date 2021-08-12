import React from 'react';

import { FormsWrapper, FormCard, FormItem } from './styled';

const SearchResult: React.FC<ISearchCards> = ({
  docs = [],
  limit = 0,
  offset = 0,
  page = 0,
  pages = 0,
  total = 0,
}: ISearchCards) => (
  <FormsWrapper>
    {docs.map((f: ISearch) => (
      <FormCard key={f._id} id={f._id}>
        <FormItem> name: {f.name}</FormItem>
        <FormItem> name: {f.name}</FormItem>
        <FormItem> birth: {f.birth}</FormItem>
        <FormItem> death: {f.death}</FormItem>
        <FormItem> gender: {f.gender}</FormItem>
        <FormItem> hair: {f.hair}</FormItem>
        <FormItem> height: {f.height}</FormItem>
        <FormItem> race: {f.race}</FormItem>
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
