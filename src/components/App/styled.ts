import styled from 'styled-components';
import inf from 'assets/images/infinity.svg';

export const Main = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const H1 = styled.h1`
  color: green;
  text-align: center;
`;

export const Loader = styled.div`
  height: 200px;
  width: 200px;
  background: url(${inf}) no-repeat center;
  background-size: cover;
  text-align: center;
`;
