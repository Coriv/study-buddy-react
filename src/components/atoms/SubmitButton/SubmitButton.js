import styled from 'styled-components';

export const SubmitButton = styled.button`
  padding: 7px 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.lightpurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  margin: 20px;
  color: ${({ theme }) => theme.colors.darkPurple};
`;
