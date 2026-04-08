import React from 'react';
import PropTypes from 'prop-types';
import { NavLinks, StyledLink } from '../../atoms/NaviElement/NaviElement';
import { StyledNavigation } from './Navigation.styled';

const Navigation = ({ urlMap }) => {
  return (
    <StyledNavigation>
      <NavLinks>
        <h2>MENU</h2>
        <StyledLink to={urlMap.HOME}>Home</StyledLink>
        <StyledLink to={urlMap.ADD_USER}>Add User</StyledLink>
        <StyledLink to={urlMap.ABOUT}>About</StyledLink>
        <StyledLink to={urlMap.LOG_OUT}>Log Out</StyledLink>
      </NavLinks>
    </StyledNavigation>
  );
};

Navigation.propTypes = {
  urlMap: PropTypes.shape({
    HOME: PropTypes.string.isRequired,
    ADD_USER: PropTypes.string.isRequired,
    ABOUT: PropTypes.string.isRequired,
    LOG_OUT: PropTypes.string.isRequired,
  }).isRequired,
};

export default Navigation;
