import styled from 'styled-components';

export const StyledUserInfoName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0;
`;

export const StyledAttendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.darkgrey};
  margin: 0;
`;
