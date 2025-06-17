import React from 'react';
import SignalCard from './components/SignalCard';

function App() {
  const signals = [
    { pair: 'EUR/USD', action: 'Buy', time: '15:30' },
    { pair: 'GBP/JPY', action: 'Sell', time: '16:00' },
  ];

  return (
    <div className="App">
      <h1>Forex Trading Signals</h1>
      {signals.map((signal, i) => (
        <SignalCard key={i} {...signal} />
      ))}
    </div>
  );
}

export default App;