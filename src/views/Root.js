import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import UserLists from 'components/organisms/UsersList/UsersList';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import AddUserForm from '../components/organisms/AddUser/AddUserForm';
import { StyledList, StyledTitle } from '../components/organisms/UsersList/StyledList.styled';
import FormField from '../components/moleculs/FormField/FormField';
import { SubmitButton } from '../components/atoms/SubmitButton/SubmitButton';
import UsersListItem from '../components/moleculs/UsersListItem/UsersListItem';
import users from 'data/Users';
import Navigation from '../components/moleculs/Navigation/Navigation';

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

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const PAGE_URL_CONST = {
  HOME: '/',
  ADD_USER: '/add-user',
  ABOUT: '/about',
  LOG_OUT: '/log-out',
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${() => `${window.innerWidth}px`};
  height: 100vh;
`;

const Root = () => {
  const [usersData, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);
  const [formValues, setFormState] = useState(initialFormState);

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

  const createUser = (event) => {
    event.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([...usersData, newUser]);
    setFormState(initialFormState);
  };

  const handleValueChange = (event) => {
    setFormState({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          {/*<nav>*/}
          {/*  <Link to="/">Home</Link>*/}
          {/*  <Link to="/add-user">Add</Link>*/}
          {/*</nav>*/}
          <Navigation urlMap={PAGE_URL_CONST} />
          <Routes>
            <Route
              path={PAGE_URL_CONST.HOME}
              element={
                <UserLists legalText="Data may be anonymised on request." deleteUser={deleteUser} usersData={usersData} isLoading={isLoading} />
              }
            />
            <Route
              path={PAGE_URL_CONST.ADD_USER}
              element={<AddUserForm handleAddUser={createUser} formValues={formValues} handleInputChange={handleValueChange} />}
            />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};
export default Root;
