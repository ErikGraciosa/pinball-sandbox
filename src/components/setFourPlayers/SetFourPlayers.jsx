import React from 'react';
import PropTypes from 'prop-types';
import styles from './SetFourPlayers.css';

function SetFourPlayers({ team, turnGreen, color }) {
  const completed = color ? styles.green : styles.white;
  
  return (
    <div className={styles.SetFourPlayers}>
      <p>Home / Away Team</p>
      <form 
        onSubmit={turnGreen} 
        className={`${completed}
          ${styles.column}`}>
        <select placeholder="player name">
          <option hidden selected>Select one...</option>
          {team.map(player => 
            <option 
              key={player} 
              value={player}>
              {player}
            </option>)}
        </select>
        <select placeholder="player name">
          <option hidden selected>Select one...</option>
          {team.map(player => 
            <option 
              key={player} 
              value={player}>
              {player}
            </option>)}
        </select>
        <select placeholder="player name">
          <option hidden selected>Select one...</option>
          {team.map(player => 
            <option 
              key={player} 
              value={player}>
              {player}
            </option>)}
        </select>
        <select placeholder="player name">
          <option hidden selected>Select one...</option>
          {team.map(player => 
            <option 
              key={player} 
              value={player}>
              {player}
            </option>)}
        </select>
        <button>Submit Lineup</button>
      </form>
    </div>
  );
}

SetFourPlayers.propTypes = {
  team: PropTypes.array.isRequired,
  turnGreen: PropTypes.func.isRequired,
  color: PropTypes.boolean,
};

export default SetFourPlayers;
