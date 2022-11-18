import React from 'react';
import moment from 'moment';
import './profile.scss';

const formatDate = date => moment(date).format('DD MMM YY');

const Profile = props => {
  return (
    <div className="profile">
      <div className="profile__name">
        {props.userData.firstName} {props.userData.lastName}
      </div>
      <div className="profile__birth">
        {formatDate(props.userData.birthDate)} {props.userData.birthPlace}
      </div>
    </div>
  );
};

export default Profile;
