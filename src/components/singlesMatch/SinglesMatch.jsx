import React from 'react';
import PropTypes from 'prop-types';
import styles from './SinglesMatch.css';

function SinglesMatch({ teamA, teamB, turnGreen, backgroundColor }) {
  console.log(backgroundColor);
  return (
    <div>
      <form onSubmit={turnGreen} className={styles.green}>
        <select placeholder="player name">
          <option hidden selected>Select one...</option>
          {teamA.map(player => 
            <option 
              key={player} 
              value={player}>
              {player}
            </option>)}
        </select>
        <select placeholder="player name">
          <option hidden selected>Select one...</option>
          {teamB.map(player => 
            <option 
              key={player} 
              value={player}>
              {player}
            </option>)}
        </select>
        Home Team Wins<input type="checkbox"></input>
        Away Team Wins<input type="checkbox"></input>
        <button>Submit Game</button>
      </form>
    </div>
  );
}

SinglesMatch.propTypes = {
  teamA: PropTypes.array.isRequired,
  teamB: PropTypes.array.isRequired,
  turnGreen: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default SinglesMatch;
