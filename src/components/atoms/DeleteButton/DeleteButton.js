import React from 'react';
import { StyledButton } from './DeleteButton.styled';
import { ReactComponent as DeleteItem } from 'assets/icons/delete-button.svg';

// 'click - onClick
// 'mouseenter - onMouseEnter

export const DeleteButton = (props) => (
  <StyledButton {...props}>
    <DeleteItem />
  </StyledButton>
);
