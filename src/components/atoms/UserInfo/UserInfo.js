import React from 'react';
import PropTypes from 'prop-types';
import { StyledUserInfoName, StyledAttendance } from './UserInfo.styles';

const UserInfo = ({ userInfo: { name, attendance = 0 } }) => (
  <div>
    <StyledUserInfoName>{name}</StyledUserInfoName>
    <StyledAttendance>Attendance: {attendance}</StyledAttendance>
  </div>
);

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.number,
  }),
};

export default UserInfo;
