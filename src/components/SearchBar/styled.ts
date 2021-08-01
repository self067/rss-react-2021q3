import styled from 'styled-components';
import magnifier from 'assets/images/magnifier.svg';

export const SearchWrap = styled.div`
  /* background: url({ma}) no-repeat center; */
  padding: 5px 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #13cccc;
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
  background-color: transparent;
  background: url(${magnifier}) no-repeat center;
  background-size: cover;
  transition: fill 0.25s;
  &:hover {
    transform: scale(1.1);
    fill: rebeccapurple;
  }
`;
