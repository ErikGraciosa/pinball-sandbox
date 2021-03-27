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
  gameTwo
}) {

  const onClickAddGold = () => {

  };

  return (
    <div className={styles.RoundOnePickWinners}>
      <header>Results</header>
      <form onSubmit={submitResults}>
        <header>Pick Winners Game 1 - {gameOne}</header>
        <div className={styles.results}>
          <div className={styles.chooseWinner}>
            <p>{playerOne}</p>
            <p>{playerTwo}</p>
          </div>
          <div className={styles.chooseWinner}>
            <p>{playerFive}</p>
            <p>{playerSix}</p>
          </div>
        </div>
        <header>Pick Winners Game 2 - {gameTwo}</header>
        <div className={styles.results}>
          <input
            type="radio"
            className={styles.chooseWinner}
            name="game-two"
            id="away-team-game-two"
            hidden></input>
          <label
            htmlFor="away-team-game-two"
            className={styles.chooseWinner}>
            <p>{playerThree}</p>
            <p>{playerFour}</p>
          </label>
          <input
            type="radio"
            className={styles.chooseWinner}
            name="game-two"
            id="home-team-game-two"
            hidden></input>
          <label
            htmlFor="home-team-game-two"
            className={styles.chooseWinner}>
            <p>{playerSeven}</p>
            <p>{playerEight}</p>
          </label>
          
        </div>
        <button>Submit Results</button>
      </form>
    </div>
  );
}



export default RoundOnePickWinners;
