/* eslint-disable max-len */
import React, { useState } from 'react';
import AwayTeamRoundOneInput from '../../components/awayTeamRoundOneInput/AwayTeamRoundOneInput';
import HomeTeamRoundOneInput from '../../components/homeTeamRoundOneInput/HomeTeamRoundOneInput';
import RoundOnePickWinners from '../../components/roundOnePickWinners/RoundOnePickWinners';
import Toast from '../../components/toast/Toast';
import { teamA, teamB, games } from '../../fixtures/DummyData';
import styles from './RoundOneFlow.css';

function RoundOneFlow() {
  const [awayEntryComplete, setAwayEntryComplete] = useState(false);
  const [showToast, setShowToast] = useState(true);
  const [colorStatus, setColorStatus] = useState(true);
  const [message, setMessage] = useState('default message');
  
  
  const turnGreen = (event) => {
    event.preventDefault();
    setAwayEntryComplete(!awayEntryComplete);
    //Whenever submit button gets clicked trigger toast to happen
    //Toast will be red or green depending on if successful POST to database.
  };



  return (
    <div className={styles.RoundOneFlow}>
      {showToast
        ? <Toast
          colorStatus={colorStatus}
          message={message}/>
        : null}
      <AwayTeamRoundOneInput
        team={teamA}
        turnGreen={turnGreen}
        awayEntryComplete={awayEntryComplete}
        games={games}/>
      <HomeTeamRoundOneInput
        turnGreen={turnGreen}
        team={teamB}
        games={games}/>
      <RoundOnePickWinners/>
    </div>
  );
}

export default RoundOneFlow;
