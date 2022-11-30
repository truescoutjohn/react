import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = props => {
  const { userId } = useParams();
  const [imgUrl, setImgUrl] = useState(null);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    (async function () {
      const response = await fetch(`https://api.github.com/users/${userId}`);
      const user = await response.json();
      setImgUrl(user.avatar_url);
      setName(user.name);
      setLocation(user.location);
    })();
  }, [userId]);

  return (
    <div className="user">
      <img alt="User Avatar" src={imgUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
