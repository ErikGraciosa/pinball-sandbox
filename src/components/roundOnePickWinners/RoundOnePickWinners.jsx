import React from 'react';
import PropTypes from 'prop-types';
import styles from './RoundOnePickWinners.css';

function RoundOnePickWinners() {
  return (
    <div className={styles.RoundOnePickWinners}>
      <header>Results</header>
      <form>
        <header>Pick Winners Game 1 - GAME NAME</header>
        <div className={styles.results}>
          <div>
            <p>Away Player 1</p>
            <p>Away Player 2</p>
          </div>
          <div>
            <p>Home Player 1</p>
            <p>Home Player 2</p>
          </div>
        </div>
        <header>Pick Winners Game 2 - GAME NAME</header>
        <div className={styles.results}>
          <div>
            <p>Away Player 3</p>
            <p>Away Player 4</p>
          </div>
          <div>
            <p>Home Player 3</p>
            <p>Home Player 4</p>
          </div>
        </div>
        <button>Submit Results</button>
      </form>
    </div>
  );
}

RoundOnePickWinners.propTypes = {
  team: PropTypes.array.isRequired,
  turnGreen: PropTypes.func.isRequired,
  awayEntryComplete: PropTypes.boolean,
  games: PropTypes.array.isRequired,
};

export default RoundOnePickWinners;
