import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeTeamRoundOneInput.css';

function HomeTeamRoundOneInput({ team, turnGreen, homeEntryComplete }) {
  return (
    <div className={styles.HomeTeamRoundOneInput}>
      <p>Round One Home Team Inputs</p>
      <form>
        <fieldset>
          <legend>Game1</legend>
          <p>The game picked</p>
          <p>
            <span>Away P1 G1</span>
            <span>Away P2 G1</span>
          </p>
          <select placeholder="player name">
            <option hidden selected>Select player...</option>
            {team.map(player => 
              <option 
                key={player} 
                value={player}>
                {player}
              </option>)}
          </select>
          <select placeholder="player name">
            <option hidden selected>Select player...</option>
            {team.map(player => 
              <option 
                key={player} 
                value={player}>
                {player}
              </option>)}
          </select>
        </fieldset>
        <fieldset>
          <legend>Game2</legend>
          <p>The game picked</p>
          <p>
            <span>Away P3 G2</span>
            <span>Away P4 G2</span>
          </p>
          <select placeholder="player name">
            <option hidden selected>Select player...</option>
            {team.map(player => 
              <option 
                key={player} 
                value={player}>
                {player}
              </option>)}
          </select>
          <select placeholder="player name">
            <option hidden selected>Select player...</option>
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

HomeTeamRoundOneInput.propTypes = {
  team: PropTypes.array.isRequired,
  turnGreen: PropTypes.func.isRequired,
  awayEntryComplete: PropTypes.boolean,
  games: PropTypes.array.isRequired,
};

export default HomeTeamRoundOneInput;
