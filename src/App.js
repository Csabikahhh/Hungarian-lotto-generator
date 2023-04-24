import React from 'react';
import LotteryGenerator5 from './components/LotteryGenerator5';
import 'bootstrap/dist/css/bootstrap.min.css';
import LotteryGenerator6 from './components/LotteryGenerator6';
import logo from './money-investment.gif';

const App = () => {
  return (
    <div>
      <LotteryGenerator5/>
      <LotteryGenerator6/>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default App;
