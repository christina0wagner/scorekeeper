import './App.css';
import React, { useState } from 'react';
import CounterBlock from './CounterBlock';

function App() {

  const [totalScore, setTotalScore] = useState(0);

  const handleCounterChange = (value) => {
    setTotalScore(totalScore + value);
  };

return (
    <div className="App">
	<header className="App-header">
		  <h1 style={{color:'#696c4a'}} >  EVERDELL </h1>
		  <CounterBlock category='Points on Cards' onCounterChange={handleCounterChange}  />
		  <CounterBlock category='Point Tokens' onCounterChange={handleCounterChange}  />
		  <CounterBlock category='Prosperity Bonuses' onCounterChange={handleCounterChange} />
		  <CounterBlock category='Journey Points' onCounterChange={handleCounterChange} />
		  <CounterBlock category='Events' onCounterChange={handleCounterChange} />
		  <h2 style={{color:'#5c503b', marginTop: '10px' }}>Total Score: {totalScore}</h2>

	  </header>      
    </div>
  );
}

export default App;
