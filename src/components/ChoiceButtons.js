import React, { useContext, useEffect } from 'react';

import { PlayerChoiceContext, ResultInfo } from '../Helper/Context';

import '../styles/ChoiceButtons.css';


const handTable = ['Rock', 'Paper', 'Scissors'];
const playerWin = 'You Win!';
const aiWin = 'Ai Win!';
const draw = 'Draw!'

const ChoiceButtons = () => {

    const { choiceHand, setChoiceHand, aiHand, setAiHand, drawResult, setDrawResult } = useContext(PlayerChoiceContext);
    const { rounds, setRounds, playerWins, setPlayerWins, aiWins, setAiWins, draws, setDraws } = useContext(ResultInfo);

    const buttonHandle = (event) =>{

        setRounds(prevState => prevState + 1);

        const playerHand = event.target.name;
        setChoiceHand(playerHand);

        const index = Math.floor(Math.random() * handTable.length);
        setAiHand(handTable[index]);

        if(playerHand === handTable[index]){
            setDrawResult(draw);
            setDraws(prevState => prevState + 1);
        }
        else if(playerHand === 'Rock' && handTable[index] === 'Scissors' ||
                playerHand === 'Paper' && handTable[index] === 'Rock' ||
                playerHand === 'Scissors' && handTable[index] === 'Paper'){

                    setDrawResult(playerWin);
                    setPlayerWins(prevState => prevState + 1);
                }
        else{

            setDrawResult(aiWin);
            setAiWins(prevState => prevState + 1);
        }

    }

    useEffect(() =>{
        document.title = `${drawResult} (${rounds})`;
    })

    return ( 
        <div className='choiceButtons'>
            <button 
                name={handTable[0]}
                onClick={buttonHandle}>
                    Rock
            </button>
            <button 
                name={handTable[1]}
                onClick={buttonHandle}>
                    Paper
            </button>
            <button 
                name={handTable[2]}
                onClick={buttonHandle}>
                    Scissors
            </button>
        
        </div>
     );
}
 
export default ChoiceButtons;