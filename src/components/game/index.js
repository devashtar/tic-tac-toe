import React, { useState } from 'react';
import './style.css';
import Field from '../field/index';
import Player from '../player/index';
import History from '../history/index';

function Game() {
    const [play, setPlay] = useState(true)  // Играть пока TRUE
    const [squares, setSquares] = useState(Array(9).fill(null))  // Квадраты
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [step, setStep] = useState(0)  // Шаг в игре (какой по счету шаг)
    const [player, setPlayer] = useState('Ходит игрок: X')
    const [scoreX, setScoreX] = useState(0)
    const [scoreO, setScoreO] = useState(0)

    const arrayStates = [play, squares, setSquares, step, setStep, setPlayer, setPlay, setScoreX, scoreX, setScoreO, scoreO, history, setHistory];
    const arStatesHist = [history, setHistory , setStep, setPlay, setSquares, setPlayer]

    return (
        <div className="container">
            <Player player={player} scoreX={scoreX} scoreO={scoreO}/>
            <Field arrayStates={arrayStates}/>
            <History arStatesHist={arStatesHist}/>
        </div>
    )
}

export default Game;