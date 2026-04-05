import React from 'react';
import { StyledButton } from './Button.styled';
import { ReactComponent as DeleteItem } from 'assets/icons/delete-button.svg';

// 'click - onClick
// 'mouseenter - onMouseEnter

export const Button = (props) => (
  <StyledButton {...props}>
    <DeleteItem />
  </StyledButton>
);
