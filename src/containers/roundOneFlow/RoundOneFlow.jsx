/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import AwayTeamRoundOneInput from '../../components/awayTeamRoundOneInput/AwayTeamRoundOneInput';
import HomeTeamRoundOneInput from '../../components/homeTeamRoundOneInput/HomeTeamRoundOneInput';
import RoundOnePickWinners from '../../components/roundOnePickWinners/RoundOnePickWinners';
import Toast from '../../components/toast/Toast';
import { teamA, teamB, games } from '../../fixtures/DummyData';
import styles from './RoundOneFlow.css';

function RoundOneFlow() {
  const [showToast, setShowToast] = useState(false);
  const [showHomeInputs, setShowHomeInputs] = useState(false);
  const [showResultsInputs, setShowResultsInputs] = useState(false);
  const [awayEntryComplete, setAwayEntryComplete] = useState(false);
  const [homeEntryComplete, setHomeEntryComplete] = useState(false);
  const [resultsEntryComplete, setResultsEntryComplete] = useState(false);
  const [colorStatus, setColorStatus] = useState(true);
  const [message, setMessage] = useState('default message');
  const [gameOne, setGameOne] = useState('Awaiting... ');
  const [gameTwo, setGameTwo] = useState('Awaiting... ');
  const [playerOne, setPlayerOne] = useState('Awaiting... ');
  const [playerTwo, setPlayerTwo] = useState('Awaiting... ');
  const [playerThree, setPlayerThree] = useState('Awaiting... ');
  const [playerFour, setPlayerFour] = useState('Awaiting... ');
  const [playerFive, setPlayerFive] = useState('Awaiting... ');
  const [playerSix, setPlayerSix] = useState('Awaiting... ');
  const [playerSeven, setPlayerSeven] = useState('Awaiting... ');
  const [playerEight, setPlayerEight] = useState('Awaiting... ');
  const [gameOneWinner, setGameOneWinner] = useState('NA');
  const [gameTwoWinner, setGameTwoWinner] = useState('NA');
  
  const checkAwayValidForm = () => {
    if(gameOne != 'Awaiting... ' &&
      gameTwo != 'Awaiting... ' &&
      playerOne != 'Awaiting... ' &&
      playerTwo != 'Awaiting... ' &&
      playerThree != 'Awaiting... ' &&
      playerFour != 'Awaiting... ') {
      setAwayEntryComplete(true);
    }
    //Whenever submit button gets clicked trigger toast to happen
    //Toast will be red or green depending on if successful POST to database.
  };

  useEffect(() => {
    checkAwayValidForm();
  }, [gameOne,
    gameTwo,
    playerOne,
    playerTwo,
    playerThree,
    playerFour]);

  const checkHomeValidForm = () => {
    if(playerFive != 'Awaiting... ' &&
      playerSix != 'Awaiting... ' &&
      playerSeven != 'Awaiting... ' &&
      playerEight != 'Awaiting... ') {
      setHomeEntryComplete(true);
    }
  };

  useEffect(() => {
    checkHomeValidForm();
  }, [playerFive,
    playerSix,
    playerSeven,
    playerEight]);

  const checkResultsValidForm = () => {
    if(gameOneWinner != 'NA' && gameTwoWinner != 'NA') {
      setResultsEntryComplete(true);
    }
  };

  useEffect(() => {
    checkResultsValidForm();
  }, [gameOneWinner, gameTwoWinner]);

  const submitAwayLineup = (event) => {
    event.preventDefault();
    setShowToast(true);
    setShowHomeInputs(true);
  };

  const submitHomeLineup = (event) => {
    event.preventDefault();
    setShowToast(true);
    setShowResultsInputs(true);
  };

  const submitResults = (event) => {
    event.preventDefault();
    setColorStatus(false);
    setMessage('Sorry submit failed, error code: ;D');
    setShowToast(true);
  };

  const gameOneOnChange = async(game) => {
    await setGameOne(game);
  };

  const gameTwoOnChange = async(game) => {
    await setGameTwo(game);
  };

  const playerOneOnChange = async(player) => {
    await setPlayerOne(player);
  };

  const playerTwoOnChange = async(player) => {
    await setPlayerTwo(player);
  };

  const playerThreeOnChange = async(player) => {
    await setPlayerThree(player);
  };

  const playerFourOnChange = async(player) => {
    await setPlayerFour(player);
  };

  const playerFiveOnChange = (player) => {
    setPlayerFive(player);
    setShowToast(false);
  };
  
  const playerSixOnChange = (player) => {
    setPlayerSix(player);
  };
  
  const playerSevenOnChange = (player) => {
    setPlayerSeven(player);
  };
  
  const playerEightOnChange = (player) => {
    setPlayerEight(player);
  };
  
  const gameOneWinnerOnChange = (winner) => {
    setShowToast(false);
    setGameOneWinner(winner);
  };

  const gameTwoWinnerOnChange = (winner) => {
    setGameTwoWinner(winner);
  };
  
  return (
    <div className={styles.RoundOneFlow}>
      {showToast
        ? <Toast
          colorStatus={colorStatus}
          message={message}/>
        : null}
      <AwayTeamRoundOneInput
        gameOneOnChange={gameOneOnChange}
        playerOneOnChange={playerOneOnChange}
        playerTwoOnChange={playerTwoOnChange}
        gameTwoOnChange={gameTwoOnChange}
        playerThreeOnChange={playerThreeOnChange}
        playerFourOnChange={playerFourOnChange}
        submitAwayLineup={submitAwayLineup}
        team={teamA}
        awayEntryComplete={awayEntryComplete}
        games={games}/>
      {showHomeInputs
        ? <HomeTeamRoundOneInput
          submitHomeLineup={submitHomeLineup}
          team={teamB}
          games={games}
          gameOne={gameOne}
          gameTwo={gameTwo}
          playerOne={playerOne}
          playerTwo={playerTwo}
          playerThree={playerThree}
          playerFour={playerFour}
          playerFiveOnChange={playerFiveOnChange}
          playerSixOnChange={playerSixOnChange}
          playerSevenOnChange={playerSevenOnChange}
          playerEightOnChange={playerEightOnChange}
          homeEntryComplete={homeEntryComplete}/>
        : null}
      {showResultsInputs
        ? <RoundOnePickWinners
          submitResults={submitResults}
          playerOne={playerOne}
          playerTwo={playerTwo}
          playerThree={playerThree}
          playerFour={playerFour}
          playerFive={playerFive}
          playerSix={playerSix}
          playerSeven={playerSeven}
          playerEight={playerEight}
          gameOne={gameOne}
          gameTwo={gameTwo}
          gameOneWinnerOnChange={gameOneWinnerOnChange}
          gameTwoWinnerOnChange={gameTwoWinnerOnChange}
          resultsEntryComplete={resultsEntryComplete}/>
        : null}
    </div>
  );
}

export default RoundOneFlow;
