import React from 'react';
import { useState } from 'react';

import ChoiceButtons from './ChoiceButtons';
import { PlayerChoiceContext } from '../Helper/Context'

import '../styles/Board.css'


const Board = () => {
    
    const [choiceHand, setChoiceHand] = useState('');
    const [aiHand, setAiHand] = useState('');
    const [drawResult, setDrawResult] = useState('');

    return ( 

        <PlayerChoiceContext.Provider value={{ choiceHand, setChoiceHand, aiHand, setAiHand, drawResult, setDrawResult }}>
        <ChoiceButtons />
        <div className='board'>
            <div className='first-stage-result'>
            <h3>Your choice: {choiceHand} </h3>
            <h3>AI choice: {aiHand}  </h3>
            <h3>Result is: {drawResult} </h3>
            </div>
        </div>
        </PlayerChoiceContext.Provider>

     );
}
 
export default Board;