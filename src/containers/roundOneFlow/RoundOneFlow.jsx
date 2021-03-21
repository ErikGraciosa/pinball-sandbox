/* eslint-disable max-len */
import React, { useState } from 'react';
import AwayTeamRoundOneInput from '../../components/awayTeamRoundOneInput/AwayTeamRoundOneInput';
import HomeTeamRoundOneInput from '../../components/homeTeamRoundOneInput/HomeTeamRoundOneInput';
import RoundOnePickWinners from '../../components/roundOnePickWinners/RoundOnePickWinners';
import { teamA, teamB, games } from '../../fixtures/DummyData';
import styles from './RoundOneFlow.css';

function RoundOneFlow() {
  const [awayEntryComplete, setAwayEntryComplete] = useState(false);
    
  const turnGreen = (event) => {
    event.preventDefault();
    setAwayEntryComplete(!awayEntryComplete);
  };

  return (
    <div className={styles.RoundOneFlow}>
      <AwayTeamRoundOneInput
        team={teamA}
        turnGreen={turnGreen}
        awayEntryComplete={awayEntryComplete}
        games={games}/>
      <HomeTeamRoundOneInput
        team={teamB}
        />
      <RoundOnePickWinners/>
    </div>
  );
}

export default RoundOneFlow;
