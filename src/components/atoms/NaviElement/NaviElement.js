import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNaviElement = styled.nav`
  display: flex;
  justify-content: space-between; /* logo vs linki */
  align-items: center;
  margin: 10px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.darkgrey};
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkgrey};
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  `;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkgrey};
  margin: 0 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
