import React from 'react';
import { Label } from '../../atoms/Label/Label';
import { Input } from '../../atoms/Input/Input';
import PropTypes from 'prop-types';
import { FormFieldWrapper } from './FormFieldWrapper.styled';

const FormField = ({ value, onChange, label, name, id, type = 'text', ...props }) => {
  return (
    <FormFieldWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} value={value} onChange={onChange} />
    </FormFieldWrapper>
  );
};

FormField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
};

export default FormField;
