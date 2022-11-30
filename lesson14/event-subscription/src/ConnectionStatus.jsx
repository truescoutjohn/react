import React, { useState, useEffect } from 'react';

const ConnectionStatus = props => {
  const [connection, setConnection] = useState('online');

  useEffect(() => {
    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);
    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlineHandler);
    };
  }, []);

  function onlineHandler(event) {
    setConnection('online');
  }

  function offlineHandler(event) {
    setConnection('offline');
  }

  let result;
  if (connection === 'online') {
    result = <div className="status">online</div>;
  } else {
    result = <div className="status status_offline">offline</div>;
  }
  return result;
};

export default ConnectionStatus;
