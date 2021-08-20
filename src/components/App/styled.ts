import styled from 'styled-components';
// import inf from 'assets/images/infinity.svg';
import { NavLink } from 'react-router-dom';

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
  /* background: url($"{inf}) no-repeat center; */
  background-size: cover;
  text-align: center;
`;
export const NNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 24px;
  color: darkgreen;
  text-decoration: none;

  transition: all ease-in-out 2ms;
  &:hover {
    color: darkblue;
    transform: scale(1.1);
  }
  &:visited {
    color: darkgreen;
  }
`;
