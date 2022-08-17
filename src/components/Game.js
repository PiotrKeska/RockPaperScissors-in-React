import React from 'react';
import { useState } from 'react';

import Header from './Header';
import Board from './Board';
import GameInfo from './GameInfo';
import { ResultInfo } from '../Helper/Context';

import '../styles/Game.css'




const Game = () => {

    const [ rounds, setRounds] = useState(0);
    const [ playerWins, setPlayerWins] = useState(0);
    const [ aiWins, setAiWins] = useState(0);
    const [ draws, setDraws] = useState(0);

    return ( 
        <div className="game">
            <Header />
            <ResultInfo.Provider value={{ rounds, setRounds, playerWins, setPlayerWins, aiWins, setAiWins, draws, setDraws}}>
                <div className='game-stats'>
                    <Board />
                </div>
                <GameInfo />
            </ResultInfo.Provider>
      </div>

     );
}
 
export default Game;