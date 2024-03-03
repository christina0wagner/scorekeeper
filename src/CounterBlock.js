import React, { useState } from 'react';
import './style.css';

const CounterBlock = ({category, onCounterChange }) => {
  // State to track the counter value
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const incrementCounter = () => {
      setCounter(counter + 1);
      onCounterChange(1);
  };

  // Function to decrement the counter
  const decrementCounter = () => {
      setCounter(counter - 1);
      onCounterChange(-1);
  };

    return (
	<div style={{ border: '2px solid #696c4a', padding: '10px', borderRadius: '8px', backgroundColor: '#b2a48a', display: 'flex', flexDirection: 'row', alignItems: 'center', height: '60px', marginBottom: '20px', width: '300px' }}>
	    <h2 className="counter-text" style={{ marginRight: '10px', marginLeft: '10px',  color: '#f3efe6', fontSize: '22px', width: '150px' }} >{category }</h2>
	    <button onClick={incrementCounter} style={{ marginRight: '10px', padding: '8px 16px', borderRadius: '8px', fontSize: '18px', color: '#f3efe6', backgroundColor: '#928f86' }} >+</button>
	    <h2 style={{ marginRight: '10px', marginLeft: '10px',  color: '#f3efe6', fontSize: '20px' }}>{counter}</h2>
	    <button onClick={decrementCounter} style={{ marginLeft: '10px', padding: '8px 16px',  borderRadius: '8px', fontSize: '18px', color: '#f3efe6',  backgroundColor: '#928f86'}}>-</button>
    </div>

  );
};

export default CounterBlock;
