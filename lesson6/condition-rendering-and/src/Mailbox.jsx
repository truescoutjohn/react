import React from 'react';

const Mailbox = ({ unreadMessages }) => {
  return (
    <div className="mailbox">
      <div className="mailbox__text">Messages</div>
      {unreadMessages.length > 0 && <div className="mailbox__count">{unreadMessages.length}</div>}
    </div>
  );
};

export default Mailbox;
