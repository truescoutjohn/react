import React from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

const Status = () => {
  const isOnline = false;
  return <>{isOnline ? <Online /> : <Offline />}</>;
};

export default Status;
