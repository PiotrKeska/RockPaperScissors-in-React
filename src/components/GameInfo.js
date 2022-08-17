import React, { useContext, useState } from 'react';

import { ResultInfo } from '../Helper/Context';

import '../styles/GameInfo.css'

const GameInfo = () => {

    const { rounds, setRounds, playerWins, setPlayerWins, aiWins, setAiWins, draws, setDraws } = useContext(ResultInfo);
    
    return ( 
        <div className='gameInfo'>

            <h3>Rounds: {rounds}</h3>
            <h3>Player wins: {playerWins}</h3>
            <h3>Ai wins: {aiWins}</h3>
            <h3>Draws: {draws}</h3>

        </div>
     );
}
 
export default GameInfo;