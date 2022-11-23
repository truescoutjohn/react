import React from 'react';
import moment from 'moment';

const Transaction = props => {
  const [date, time] = moment(props.time).format('DD MMM-HH:MM').split('-');
  return (
    <li class="transaction">
      <span class="transaction__date">{date}</span>
      <span class="transaction__time">{time}</span>
      <span class="transaction__assets">
        {props.from}-{props.to}
      </span>
      <span class="transaction__rate">{new Intl.NumberFormat('en-GB').format(props.rate)}</span>
      <span class="transaction__amount">{new Intl.NumberFormat('en-GB').format(props.amount)}</span>
    </li>
  );
};

export default Transaction;
