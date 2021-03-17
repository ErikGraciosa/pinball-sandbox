import React from 'react';
import PropTypes from 'prop-types';
import styles from './GameList.css';

function GameList({ games }) {
  return (
    <div className={styles.GameList}>
      <p>Game List</p>
      <form
        className={styles.column}>
        <select placeholder="game name">
          <option hidden selected>Select one...</option>
          {games.map(game => 
            <option 
              key={game} 
              value={game}>
              {game}
            </option>)}
        </select>
        <select placeholder="game name">
          <option hidden selected>Select one...</option>
          {games.map(game => 
            <option 
              key={game} 
              value={game}>
              {game}
            </option>)}
        </select>
        <select placeholder="game name">
          <option hidden selected>Select one...</option>
          {games.map(game => 
            <option 
              key={game} 
              value={game}>
              {game}
            </option>)}
        </select>
        <select placeholder="game name">
          <option hidden selected>Select one...</option>
          {games.map(game => 
            <option 
              key={game} 
              value={game}>
              {game}
            </option>)}
        </select>
      </form>
    </div>
  );
}

GameList.propTypes = {
  games: PropTypes.array.isRequired,
};

export default GameList;
