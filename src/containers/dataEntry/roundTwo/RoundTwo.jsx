import React, { useState } from 'react';
import GameList from '../../../components/gameList/GameList';
import ResultsInputs from '../../../components/resultsInputs/ResultsInputs';
import SetFourPlayers from '../../../components/setFourPlayers/SetFourPlayers';
import { teamA, teamB, games } from '../../../fixtures/DummyData';
import styles from './RoundTwo.css';

function RoundTwo() {
  const [color, setColor] = useState(false);
    
  const turnGreen = (event) => {
    event.preventDefault();
    setColor(!color);
  };
  return (
    <div className={styles.RoundTwo}>
      <div className={styles.block}>
        <SetFourPlayers
          team={teamA}
          turnGreen={turnGreen} 
          color={color}/>
        <SetFourPlayers
          team={teamA}
          turnGreen={turnGreen} 
          color={color}/>
        <GameList
          games={games}/>
        <SetFourPlayers
          team={teamB}
          turnGreen={turnGreen}
          color={color} />
        <SetFourPlayers
          team={teamB}
          turnGreen={turnGreen}
          color={color} />
        <div className={styles.column}>  
          <ResultsInputs/>
          <ResultsInputs/>
          <ResultsInputs/>
          <ResultsInputs/>
        </div>
      </div>
    </div>
  );
}

export default RoundTwo;
