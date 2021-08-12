import React, { useState } from 'react';
import { SortWrapper } from './styled';

export default ({ orderField, orderDir, setOrderField, setOrderDir }: ISortOrder) => (
  <SortWrapper>
    Select order field:
    <select name="" id="" onChange={e => setOrderField(e.target.value)} value={orderField}>
      <option value="unsorted">unsorted</option>
      <option value="name">by name</option>
      <option value="birth">by birth</option>
      <option value="death">by death</option>
      <option value="gender">by gender</option>
      <option value="hair">by hair</option>
      <option value="height">by height</option>
      <option value="race">by race</option>
    </select>
  </SortWrapper>
);
