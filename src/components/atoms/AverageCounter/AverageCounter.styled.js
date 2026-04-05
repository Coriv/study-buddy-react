import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';
import { resolveBackgroundColor } from './AverageCounterUtil';

export const StyledAverageCounter = styled.div`
  color: ${({ theme, average }) => (average && average > 3 ? theme.colors.red : theme.colors.green)};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme, average }) => resolveBackgroundColor({ theme, average })};

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
`;
