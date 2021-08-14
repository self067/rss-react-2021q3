import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const StyledPage404 = styled.div`
  animation: 2s ${keyframes`${zoomIn}`};
  margin-top: 140px;
  font-size: 40px;
  text-align: center;
`;
export default StyledPage404;
