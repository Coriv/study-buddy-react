import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import users from 'data/Users';
import UsersListItem from '../../moleculs/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './StyledList.styled';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([...users]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = ({ legalText }) => {
  const [usersData, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  const deleteUser = (name) => {
    const filteredUsers = usersData.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  useEffect(() => {
    setLoadingState(true);
    mockAPI(true)
      .then((data) => {
        setUsers(data);
        setLoadingState(false);
      })
      .catch((err) => console.log(err));

    return () => {
      console.log('diMount :) ');
    };
  }, []);

  useEffect(() => {
    console.log('Loading user state');
  }, [isLoading]);

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : `User's list`}</h1>
      <StyledList>
        {usersData.map((usersData, i) => (
          <UsersListItem index={i} key={usersData.name} usersData={usersData} deleteUser={deleteUser}></UsersListItem>
        ))}
      </StyledList>
      <h5>{legalText}</h5>
    </Wrapper>
  );
};

UsersList.propTypes = {
  legalText: PropTypes.string,
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
