import React, { useState, useEffect } from 'react';

const Clock = props => {
  function getTimeWithOffset(offset) {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  }

  let interval;
  const [time, setTime] = useState(getTimeWithOffset(props.offset));

  useEffect(() => {
    interval = setInterval(() => setTime(getTimeWithOffset(props.offset)), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{props.location}</div>
      <div className="clock__time">{time.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;
