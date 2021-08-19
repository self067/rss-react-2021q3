import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';

const StyledAbout = styled.div`
  animation: 3s ${keyframes`${slideInLeft}`};
  margin-top: 140px;
  font-size: 40px;
  text-align: center;
`;

export default StyledAbout;
