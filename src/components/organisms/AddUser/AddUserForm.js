import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { StyledTitle, Wrapper } from '../UsersList/StyledList.styled';
import FormField from '../../moleculs/FormField/FormField';
import { SubmitButton } from '../../atoms/SubmitButton/SubmitButton';
import users from '../../../data/Users';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const AddUserForm = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <div>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" name="name" id="2312" value={formValues.name} onChange={handleInputChange}></FormField>
        <FormField label="Attendance" name="attendance" id="2314" value={formValues.attendance} onChange={handleInputChange}></FormField>
        <FormField label="Average" name="average" id="2315" value={formValues.average} onChange={handleInputChange}></FormField>
        <SubmitButton type="submit"></SubmitButton>
      </Wrapper>
    </div>
  );
};

AddUserForm.propTypes = {
  handleAddUser: PropTypes.string,
  formValues: PropTypes.shape({
    name: PropTypes.string,
    attendance: PropTypes.string,
    average: PropTypes.string,
  }),
  handleInputChange: PropTypes.func,
};

export default AddUserForm;
