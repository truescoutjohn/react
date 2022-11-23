import React from 'react';
import moment from 'moment';

const formatter = new Intl.NumberFormat('en-GB');

const Transaction = props => {
  const [date, time] = moment(new Date(props.time)).format('DD MMM-HH:mm').split('-');

  return (
    <li className="transaction">
      <span className="transaction__date">{date}</span>
      <span className="transaction__time">{time}</span>
      <span className="transaction__assets">
        {props.from} &#8594; {props.to}
      </span>
      <span className="transaction__rate">{props.rate}</span>
      <span className="transaction__amount">{formatter.format(props.amount)}</span>
    </li>
  );
};

export default Transaction;
