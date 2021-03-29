import React from 'react';
import PropTypes from 'prop-types';
import styles from './AwayTeamRoundOneInput.css';

function AwayTeamRoundOneInput({
  team,
  awayEntryComplete,
  games,
  submitAwayLineup,
  gameOneOnChange,
  playerOneOnChange,
  playerTwoOnChange,
  gameTwoOnChange,
  playerThreeOnChange,
  playerFourOnChange
}) {
  const completed = awayEntryComplete ? styles.green : styles.white;
  const submitted = 'disabled';
  return (
    <div className={styles.AwayTeamRoundOneInput}>
      <p>Round One Away Team Inputs</p>
      <form 
        onSubmit={submitAwayLineup}>
        <fieldset>
          <legend>Game 1</legend>
          <select
            placeholder="game"
            onChange={(event) => gameOneOnChange(event.target.value)}>
            <option hidden defaultValue>Select game...</option>
            {games.map(game => 
              <option 
                key={game} 
                value={game}>
                {game}
              </option>)}
          </select>
          <br/>
          <select
            placeholder="player name"
            onChange={(event) => playerOneOnChange(event.target.value)}>
            <option hidden defaultValue>Select player...</option>
            {team.map(player => 
              <option 
                key={player} 
                value={player}>
                {player}
              </option>)}
          </select>
          <select
            placeholder="player name"
            onChange={(event) => playerTwoOnChange(event.target.value)}>
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
          <select
            placeholder="game name"
            onChange={(event) => gameTwoOnChange(event.target.value)}>
            <option hidden defaultValue>Select game...</option>
            {games.map(game => 
              <option 
                key={game} 
                value={game}>
                {game}
              </option>)}
          </select>
          <br/>
          <select
            placeholder="player name"
            onChange={(event) => playerThreeOnChange(event.target.value)}>
            <option hidden defaultValue>Select player...</option>
            {team.map(player => 
              <option 
                key={player} 
                value={player}>
                {player}
              </option>)}
          </select>
          <select
            placeholder="player name"
            onChange={(event) => playerFourOnChange(event.target.value)}>
            <option hidden defaultValue>Select player...</option>
            {team.map(player => 
              <option 
                key={player} 
                value={player}>
                {player}
              </option>)}
          </select>
        </fieldset>
        {awayEntryComplete
          ? <button className={completed}>Submit Lineup</button>
          : <button disabled>Submit Lineup</button>
        }
      </form>
    </div>
  );
}

AwayTeamRoundOneInput.propTypes = {
  team: PropTypes.array.isRequired,
  awayEntryComplete: PropTypes.bool,
  games: PropTypes.array.isRequired,
  submitAwayLineup: PropTypes.func.isRequired,
  gameOneOnChange: PropTypes.func.isRequired,
};

export default AwayTeamRoundOneInput;
