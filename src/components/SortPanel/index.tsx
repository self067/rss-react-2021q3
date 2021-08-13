import React from 'react';
import { SortWrapper, SortItem, SortLabel } from './styled';

const SortPanel: React.FC<ISortOrder> = ({
  orderField,
  orderDir,
  setOrderField,
  setOrderDir,
}: ISortOrder) => (
  <SortWrapper>
    <SortItem>
      <SortLabel>Select order field:</SortLabel>
      <select
        name="sortfield"
        id=""
        onChange={e => setOrderField(e.target.value)}
        value={orderField}
      >
        <option value="unsorted">unsorted</option>
        <option value="name">by name</option>
        <option value="birth">by birth</option>
        <option value="death">by death</option>
        <option value="gender">by gender</option>
        <option value="hair">by hair</option>
        <option value="height">by height</option>
        <option value="race">by race</option>
      </select>
    </SortItem>
    <SortItem>
      <SortLabel>Sort Direction:</SortLabel>
      <select
        name="sortdir"
        id=""
        onChange={e => setOrderDir(e.target.value === 'Asc')}
        value={orderDir ? 'Asc' : 'Desc'}
      >
        <option value="Asc">Asc</option>
        <option value="Desc">Desc</option>
      </select>
    </SortItem>
  </SortWrapper>
);
export default SortPanel;
