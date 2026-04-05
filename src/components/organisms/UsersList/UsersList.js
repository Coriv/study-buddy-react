import React from 'react';
import PropTypes from 'prop-types';
import users from 'data/Users';
import styled from 'styled-components';
import UsersListItem from '../../moleculs/UsersListItem/UsersListItem';

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

const UsersList = () => (
  <Wrapper>
    <ul>
      {users.map((usersData, i) => (
        <UsersListItem index={i} key={usersData.name} usersData={usersData}></UsersListItem>
      ))}
    </ul>
  </Wrapper>
);

export default UsersList;
