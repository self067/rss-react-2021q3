import React from 'react';
import { InputNum } from 'components/Input';
import { PagingWrapper, PagingItem } from './styled';

interface IPaging {
  limit: number;
  setPageLimit: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
  total: number;
}

const PagingPanel: React.FC<IPaging> = ({
  limit,
  setPageLimit,
  page,
  setPageNum,
  pages,
  total,
}: IPaging) => (
  <PagingWrapper>
    <PagingItem>
      <InputNum
        inputName="limit"
        inputType="number"
        label="Cards per page"
        value={limit}
        max={100}
        onChange={e => {
          if (e.target.value && e.target.validity.valid) setPageLimit(+e.target.value);
        }}
      />
      <InputNum
        inputName="page"
        inputType="number"
        label="Current Page"
        value={page}
        max={pages}
        onChange={e => {
          if (e.target.value && e.target.validity.valid) setPageNum(+e.target.value);
        }}
      />
    </PagingItem>
    <PagingItem>
      Total {total} cards in {pages} pages
    </PagingItem>
  </PagingWrapper>
);
export default PagingPanel;
