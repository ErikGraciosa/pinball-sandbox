import React from 'react';
import styles from './ResultsInputs.css';

function ResultsInputs() {
  return (
    <div className={styles.ResultsInputs}>
      Home Team Wins<input type="radio" name="winners"></input>
      Away Team Wins<input type="radio" name="winners"></input>
      <button>Submit Game</button>
    </div>
  );
}

export default ResultsInputs;
