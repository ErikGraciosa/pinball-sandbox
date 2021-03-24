import React from 'react';
import PropTypes from 'prop-types';
import styles from './AwayTeamRoundOneInput.css';

function AwayTeamRoundOneInput({ team, turnGreen, awayEntryComplete, games }) {
  const completed = awayEntryComplete ? styles.green : styles.white;

  return (
    <div className={styles.AwayTeamRoundOneInput}>
      <p>Round One Away Team Inputs</p>
      <form 
        onSubmit={turnGreen} 
        className={completed}>
        <fieldset>
          <legend>Game 1</legend>
          <select placeholder="game">
            <option hidden defaultValue>Select game...</option>
            {games.map(game => 
              <option 
                key={game} 
                value={game}>
                {game}
              </option>)}
          </select>
          <br/>
          <select placeholder="player name">
            <option hidden defaultValue>Select player...</option>
            {team.map(player => 
              <option 
                key={player} 
                value={player}>
                {player}
              </option>)}
          </select>
          <select placeholder="player name">
            <option hidden defaultValue>Select player...</option>
            {team.map(player => 
              <option 
                key={player} 
                value={player}>
                {player}
              </option>)}
          </select>
        </fieldset>
        <fieldset>
          <legend>Game 2</legend>
          <select placeholder="game name">
            <option hidden defaultValue>Select game...</option>
            {games.map(game => 
              <option 
                key={game} 
                value={game}>
                {game}
              </option>)}
          </select>
          <br/>
          <select placeholder="player name">
            <option hidden defaultValue>Select player...</option>
            {team.map(player => 
              <option 
                key={player} 
                value={player}>
                {player}
              </option>)}
          </select>
          <select placeholder="player name">
            <option hidden defaultValue>Select player...</option>
            {team.map(player => 
              <option 
                key={player} 
                value={player}>
                {player}
              </option>)}
          </select>
        </fieldset>
        <button>Submit Lineup</button>
      </form>
    </div>
  );
}

AwayTeamRoundOneInput.propTypes = {
  team: PropTypes.array.isRequired,
  turnGreen: PropTypes.func.isRequired,
  awayEntryComplete: PropTypes.bool,
  games: PropTypes.array.isRequired,
};

export default AwayTeamRoundOneInput;
