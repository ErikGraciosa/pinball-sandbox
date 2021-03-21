import React from 'react';
import DoublesHeader from '../../components/doublesHeader/DoublesHeader';
import SinglesHeader from '../../components/singlesHeader/SinglesHeader';
import RoundOne from './roundOne/RoundOne';
import RoundTwo from './roundTwo/RoundTwo';

function DataEntry() {
  return (
    <div>
      <SinglesHeader/>
      <RoundOne/>
      <DoublesHeader/>
      <RoundTwo/>
    </div>
  );
}

export default DataEntry;
