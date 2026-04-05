import React from 'react';
import PropTypes from 'prop-types';
import { StyledAverageCounter } from './AverageCounter.styled';

const AverageCounter = ({ average }) => (
  <StyledAverageCounter average={average}>
    <div>{average}</div>
  </StyledAverageCounter>
);

AverageCounter.propTypes = {
  average: PropTypes.number.isRequired,
};

export default AverageCounter;
