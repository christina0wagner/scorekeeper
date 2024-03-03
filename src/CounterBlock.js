import React, { useState } from 'react';


function PlayerBlock({ playerName, onScoreChange }) {
  const [score, setScore] = useState(0);

  const updateScore = (operation) => {
    if (operation === 'increment') {
      setScore(prevScore => prevScore + 1);
      onScoreChange(playerName, 1); // Update total score by adding 1
    } else if (operation === 'decrement' && score > 0) {
      setScore(prevScore => prevScore - 1);
      onScoreChange(playerName, -1); // Update total score by subtracting 1

    }
  };

  return (
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', width:'500px', fontSize:'20px' }}>
     
         <p  style={{ color: '#ffd8e0', margin: '0', width: '400px' }}>{playerName}</p>
     
	  <div style={{ marginRight: '20px', backgroundColor: '#d49ca8', padding: '10px', borderRadius: '5px' }}>
      
              <p style={{ margin: '0' , color:'#673844'}}>{score}</p>
      </div>
	  <div style={{ flex: '0 0 auto' }}>
              <button onClick={() => updateScore('increment')} style={{width: '10px', height: '8px',  backgroundColor: '#9ac1b2', color: '#360b19',borderRadius: '5px',fontSize:'16px', marginLeft: '10px', border: 'none', padding: '9px 21px', cursor: 'pointer', display: 'flex', alignItems:'center', justifyContent: 'center', }}	>+</button>
	      
              <button  onClick={() => updateScore('decrement')}  style={{marginTop: '5px', width: '10px', height: '8px', backgroundColor: '#7c0032', color: 'white', marginLeft: '10px',borderRadius:'5px',fontSize:'16px',border: 'none', padding: '9px 21px', cursor: 'pointer', display: 'flex', alignItems:'center', justifyContent: 'center', }}  >-</button>
      </div>
    </div>
  );
}



export default PlayerBlock;
