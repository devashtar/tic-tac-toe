import React from 'react';
import './style.css';
import Square from '../square/index'

function Field({arrayStates}) {
    const [play, squares, setSquares, step, setStep, setPlayer, setPlay, setScoreX, scoreX, setScoreO, scoreO, history, setHistory, countAction, setCountAction] = arrayStates

    const takeStep = ({target}) => {
        if (!play) return;
        if (!target.classList.contains('square')) return;
        const k = +target.dataset.pos;
        if (squares[k]) return;
        const curSquares = squares.map((item, index) => {
            if (index === k) {
                return item = step % 2 ? 'O' : 'X';
            }
            return item
        })
        if (countAction) setCountAction(false);
        setSquares(curSquares)
        setStep(step + 1)
        setHistory([...history, curSquares])
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (curSquares[a] && curSquares[a] === curSquares[b] && curSquares[a] === curSquares[c]) {
                setPlayer(`"${curSquares[a]}" победитель!!!`);
                setPlay(false);
                showLine(i);
                if (curSquares[a] === 'X') {
                    setScoreX(scoreX + 1)
                } else {
                    setScoreO(scoreO + 1)
                }
                break;
            } else if (null !== curSquares.find(item => item === null)) {
                setPlayer('Ничья!')
                setPlay(false)
            } else {
                if (step % 2) {
                    setPlayer('Ходит игрок: X')
                } else {
                    setPlayer('Ходит игрок: O')
                }
            }
          }
    }

    const showLine = (line) => {
        if (line === 0) {
            document.querySelector('.field').classList.add('gtop')
        } else if (line === 1) {
            document.querySelector('.field').classList.add('gcenter')
        } else if (line === 2) {
            document.querySelector('.field').classList.add('gbottom')
        } else if (line === 3) {
            document.querySelector('.field').classList.add('vleft')
        } else if (line === 4) {
            document.querySelector('.field').classList.add('vcenter')
        } else if (line === 5) {
            document.querySelector('.field').classList.add('vright')
        } else if (line === 6) {
            document.querySelector('.field').classList.add('backline')
        } else if (line === 7) {
            document.querySelector('.field').classList.add('forline')
        }
    }

    return (
        <div className="field" onClick={(e) => takeStep(e)}>
            {squares.map((el, index) => {
                return (
                    <Square key={index} val={squares[index]} i={index}/> 
                ) 
            })}
        </div>
    )
}

export default Field;