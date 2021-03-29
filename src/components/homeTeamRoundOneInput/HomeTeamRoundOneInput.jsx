import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeTeamRoundOneInput.css';

function HomeTeamRoundOneInput({ 
  team,
  gameOne,
  gameTwo,
  playerOne,
  playerTwo,
  playerThree,
  playerFour,
  playerFiveOnChange,
  playerSixOnChange,
  playerSevenOnChange,
  playerEightOnChange,
  submitHomeLineup,
  homeEntryComplete,
  disableHomeEntry
}) {
  const completed = homeEntryComplete ? styles.green : styles.white;
  return (
    <div className={styles.HomeTeamRoundOneInput}>
      <p>Round One Home Team Inputs</p>
      <form onSubmit={submitHomeLineup}>
        {disableHomeEntry
          ? <>
            <fieldset disabled>
              <legend>Game1</legend>
              <p>{gameOne}</p>
              <p>
                <span>{playerOne}</span>
                <span>{playerTwo}</span>
              </p>
              <select 
                placeholder="player name"
                onChange={(event) => playerFiveOnChange(event.target.value)}>
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
                onChange={(event) => playerSixOnChange(event.target.value)}>
                <option hidden defaultValue>Select player...</option>
                {team.map(player => 
                  <option 
                    key={player} 
                    value={player}>
                    {player}
                  </option>)}
              </select>
            </fieldset>
            <fieldset disabled> 
              <legend>Game 2</legend>
              <p>{gameTwo}</p>
              <p>
                <span>{playerThree}</span>
                <span>{playerFour}</span>
              </p>
              <select
                placeholder="player name"
                onChange={(event) => playerSevenOnChange(event.target.value)}>
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
                onChange={(event) => playerEightOnChange(event.target.value)}>
                <option hidden defaultValue>Select player...</option>
                {team.map(player => 
                  <option 
                    key={player} 
                    value={player}>
                    {player}
                  </option>)}
              </select>
            </fieldset>
          </>
          : <>
            <fieldset>
              <legend>Game1</legend>
              <p>{gameOne}</p>
              <p>
                <span>{playerOne}</span>
                <span>{playerTwo}</span>
              </p>
              <select 
                placeholder="player name"
                onChange={(event) => playerFiveOnChange(event.target.value)}>
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
                onChange={(event) => playerSixOnChange(event.target.value)}>
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
              <p>{gameTwo}</p>
              <p>
                <span>{playerThree}</span>
                <span>{playerFour}</span>
              </p>
              <select
                placeholder="player name"
                onChange={(event) => playerSevenOnChange(event.target.value)}>
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
                onChange={(event) => playerEightOnChange(event.target.value)}>
                <option hidden defaultValue>Select player...</option>
                {team.map(player => 
                  <option 
                    key={player} 
                    value={player}>
                    {player}
                  </option>)}
              </select>
            </fieldset>
          </>
        }
        {homeEntryComplete
          ? <button className={completed}>Submit Lineup</button>
          : <button disabled>Submit Lineup</button>
        }
      </form>
    </div>
  );
}

HomeTeamRoundOneInput.propTypes = {
  team: PropTypes.array.isRequired,
  submitHomeLineup: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired,
  gameOne: PropTypes.string.isRequired,
  gameTwo: PropTypes.string.isRequired,
  playerOne: PropTypes.string.isRequired,
  playerTwo: PropTypes.string.isRequired,
  playerThree: PropTypes.string.isRequired,
  playerFour: PropTypes.string.isRequired,
};

export default HomeTeamRoundOneInput;
