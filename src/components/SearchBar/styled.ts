import styled from 'styled-components';
// import * as ma from '../SearchBar/ma';

export const SearchWrap = styled.div`
  /* background: url({ma}) no-repeat center; */
  padding: 5px 10px;
  margin: 0 auto;
  display: inline-flex;
  align-items: center;
  border-radius: 10px;
  background-color: #f3115c;
  font-size: 2rem;
`;

export const SearchInput = styled.input`
  margin: 5px 10px 5px 1px;
  outline: none;
  color: blue;
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  /* background-color: transparent; */
  background: url('./magnifier.svg') no-repeat center;
`;
