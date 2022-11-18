import React from 'react';
import moment from 'moment';
import './profile.scss';

const formatDate = date => moment(date).format('DD MMM YY');

const Profile = props => {
  return (
    <div className="profile">
      <div className="profile__name">
        {props.user.firstName} {props.user.lastName}
      </div>
      <div className="profile__birth">
        {formatDate(props.user.birthDate)} {props.user.birthPlace}
      </div>
    </div>
  );
};

export default Profile;
