import React from 'react';
import PropTypes from 'prop-types';
import AverageCounter from 'components/atoms/AverageCounter/AverageCounter';
import UserInfo from 'components/atoms/UserInfo/UserInfo';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper, StyledWrapperUserInfo, StyledWrapperAverage, StyledButtonWrapper } from './UsersListItem.styles';

const showIndex = (index) => alert(`This is student #${index + 1}`);

const UsersListItem = ({ index, usersData: { average, name, attendance } }) => (
  <Wrapper>
    <StyledWrapperAverage>
      <AverageCounter average={average} />
    </StyledWrapperAverage>
    <StyledWrapperUserInfo>
      <UserInfo userInfo={{ name, attendance }} />
    </StyledWrapperUserInfo>
    <StyledButtonWrapper>
      <Button onClick={() => showIndex(index)} />
    </StyledButtonWrapper>
  </Wrapper>
);

UsersListItem.propTypes = {
  index: PropTypes.number.isRequired,
  usersData: PropTypes.shape({
    name: PropTypes.string,
    attendance: PropTypes.number,
    average: PropTypes.number,
  }),
};
export default UsersListItem;
