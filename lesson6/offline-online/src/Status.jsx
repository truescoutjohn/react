import React from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

const Status = () => {
  const isOnline = true;
  return <>{isOnline ? <Online /> : <Offline />}</>;
};

export default Status;
