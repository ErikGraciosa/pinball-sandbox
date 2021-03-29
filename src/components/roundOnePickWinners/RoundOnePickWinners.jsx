import React from 'react';
import PropTypes from 'prop-types';
import styles from './RoundOnePickWinners.css';

function RoundOnePickWinners({ 
  submitResults,
  playerOne,
  playerTwo,
  playerThree,
  playerFour,
  playerFive,
  playerSix,
  playerSeven,
  playerEight,
  gameOne,
  gameTwo,
  gameOneWinnerOnChange,
  gameTwoWinnerOnChange,
  resultsEntryComplete
}) {
  const completed = resultsEntryComplete ? styles.green : styles.white;
  return (
    <div className={styles.RoundOnePickWinners}>
      <header>Results - Select Winners</header>
      <form onSubmit={submitResults}>
        <header>Pick Winners Game 1 - {gameOne}</header>
        <div className={styles.results}>
          <input
            onChange={(event) => gameOneWinnerOnChange(event.target.value)}
            type="radio"
            className={styles.chooseWinner}
            name="game-one"
            id="away-team-game-one"
            value="Away"
            hidden/>
          <label
            htmlFor="away-team-game-one"
            className={styles.chooseWinner}>
            <p>{playerOne}</p>
            <p>{playerTwo}</p>
          </label>
          <input
            onChange={(event) => gameOneWinnerOnChange(event.target.value)}
            type="radio"
            className={styles.chooseWinner}
            name="game-one"
            id="home-team-game-one"
            value="Home"
            hidden/>
          <label
            htmlFor="home-team-game-one"
            className={styles.chooseWinner}>
            <p>{playerFive}</p>
            <p>{playerSix}</p>
          </label>
        </div>
        <header>Pick Winners Game 2 - {gameTwo}</header>
        <div className={styles.results}>
          <input
            onChange={(event) => gameTwoWinnerOnChange(event.target.value)}
            type="radio"
            className={styles.chooseWinner}
            name="game-two"
            id="away-team-game-two"
            value="Away"
            hidden/>
          <label
            htmlFor="away-team-game-two"
            className={styles.chooseWinner}>
            <p>{playerThree}</p>
            <p>{playerFour}</p>
          </label>
          <input
            onChange={(event) => gameTwoWinnerOnChange(event.target.value)}
            type="radio"
            className={styles.chooseWinner}
            name="game-two"
            id="home-team-game-two"
            value="Home"
            hidden/>
          <label
            htmlFor="home-team-game-two"
            className={styles.chooseWinner}>
            <p>{playerSeven}</p>
            <p>{playerEight}</p>
          </label>
        </div>
        {resultsEntryComplete
          ? <button className={completed}>Submit Results</button>
          : <button disabled>Submit Results</button>
        }
      </form>
    </div>
  );
}



export default RoundOnePickWinners;
