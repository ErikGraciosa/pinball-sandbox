import React from 'react';
import RoundOne from '../../containers/roundOne/RoundOne';
import RoundTwo from '../../containers/roundTwo/RoundTwo';
import DoublesHeader from '../doublesHeader/DoublesHeader';
import SinglesHeader from '../singlesHeader/SinglesHeader';
import './App.css';

export default function App() {
  return (
    <>
      <SinglesHeader/>
      <RoundOne/>
      <DoublesHeader/>
      <RoundTwo/>
    </>
  );
}
