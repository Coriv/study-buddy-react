import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import users from 'data/Users';
import UsersListItem from '../../moleculs/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './StyledList.styled';
import FormField from '../../moleculs/FormField/FormField';
import { SubmitButton } from '../../atoms/SubmitButton/SubmitButton';

const UsersList = ({ legalText, usersData, deleteUser, isLoading }) => {
  return (
    <>
      <Wrapper>
        <h1>{isLoading ? 'Loading...' : `User's list`}</h1>
        <StyledList>
          {usersData.map((usersData, i) => (
            <UsersListItem index={i} key={usersData.name} usersData={usersData} deleteUser={deleteUser}></UsersListItem>
          ))}
        </StyledList>
        <h5>{legalText}</h5>
      </Wrapper>
    </>
  );
};

UsersList.propTypes = {
  usersData: PropTypes.array,
  deleteUser: PropTypes.func,
  legalText: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default UsersList;

// ----------

// class UsersList extends React.Component {
//   state = {
//     listTitle: `User's list:`,
//     users: [],
//     isLoading: false,
//   };
//
//   componentDidMount() {
//     this.setState({ isLoading: true });
//
//   }
//
//   componentDidUpdate(_, prevState) {
//     if (prevState.isLoading !== this.state.isLoading) {
//       console.log('Loading state has change');
//     }
//   }
//
//   toggleListTitle = () => {
//     this.setState((prevState) => ({
//       isUsersList: !prevState.isUsersList,
//     }));
//   };
//
//
//
//   render() {
//     return (
//    <Wrapper>
//       <h1>{isLoading ? 'Loading...' : `User's list`}</h1>
//       <StyledList>
//         {usersData.map((usersData, i) => (
//           <UsersListItem index={i} key={usersData.name} usersData={usersData} deleteUser={deleteUser}></UsersListItem>
//         ))}
//       </StyledList>
//       <h5>{legalText}</h5>
//     </Wrapper>
//     );
//   }
// }
//
