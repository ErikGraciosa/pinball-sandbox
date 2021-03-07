import React, { useState } from 'react';
import SinglesMatch from '../../components/singlesMatch/SinglesMatch';

function RoundOne() {
  const teamA = [
    'Homer Simpson',
    'Marge Simpson',
    'Mr Burns',
    'Mayor Quimby',
    'Ralph Wiggam',
    'Lisa Simpson',
    'Sideshow Bob',
    'Patty Bouvier',
    'Selma Bouvier',
    'Luann Van Houten'];
  const teamB = [
    'Turanga Leela',
    'Amy Wong',
    'Zapp Brannigan',
    'Bender Rodriguez',
    'Professor Farnsworth',
    'Hermes Conrad',
    'Janitor Scruffy',
    'Kif Kroker',
    'Phillip Fry',
    'Zoidberg'];

  const [backgroundColor, setBackgroundColor] = useState('styles.white');
    
  const turnGreen = (event) => {
    event.preventDefault();
    setBackgroundColor('styles.green');
  };

  
  return (
    <div>
      <SinglesMatch 
        teamA={teamA} 
        teamB={teamB} 
        turnGreen={turnGreen} 
        backgroundColor={backgroundColor}/>
      {/* <SinglesMatch teamA={teamA} teamB={teamB}/>
      <SinglesMatch teamA={teamA} teamB={teamB}/>
      <SinglesMatch teamA={teamA} teamB={teamB}/> */}
    </div>
  );
}

export default RoundOne;
