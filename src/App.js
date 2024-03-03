
import './App.css';
import React, {useState} from 'react';
import PlayerBlock from './CounterBlock';


function App() {
     const [totalScore, setTotalScore] = useState(0);

  const handleScoreChange = (playerName, value) => {
      setTotalScore(totalScore => totalScore + value);
  };
    return(
    <div className="App">
      <header className="App-header">
          <p>
	      <div style={{border: '2px solid #360b19', backgroundColor:'#ffd8e0', borderRadius:'7px', padding: '5px 20px'}}>
		  <h3 style={{color:'#673844'}}  >everdell</h3>
		  </div>
    </p>

	  <div style={{border:'2px solid #ffd8e0', backgroundColor:'#360b19', padding: '30px', borderRadius: '10px', width:'500px'}}>
	      <PlayerBlock playerName="base points for cards" onScoreChange={handleScoreChange} />
	   <PlayerBlock playerName="point tokens" onScoreChange={handleScoreChange} />
        <PlayerBlock playerName="prosperity card bonus points" onScoreChange={handleScoreChange} />
        <PlayerBlock playerName="journey points" onScoreChange={handleScoreChange} />
              <PlayerBlock playerName="events" onScoreChange={handleScoreChange}  />
	      </div>
	 
	  <div style={{border: '2px solid #360b19', backgroundColor: '#ffd8e0', padding: '0px', marginTop:'30px' ,borderRadius: '7px', width:'500px'}}>
	        <h4 style={{color: '#673844'}} >total score: {totalScore}</h4>
	      </div>
       
      </header>

    </div>
  );

 

	};

export default App;
