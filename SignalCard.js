import React from 'react';

function SignalCard({ pair, action, time }) {
  return (
    <div className="card">
      <h3>{pair}</h3>
      <p>Action: {action}</p>
      <p>Time: {time}</p>
    </div>
  );
}

export default SignalCard;