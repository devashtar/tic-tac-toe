import React from 'react';
import './style.css';

function History({arStatesHist}) {
    const [history, setHistory , setStep, setPlay, setSquares, setPlayer] = arStatesHist;

    const goStart = () => {
        setHistory([Array(9).fill(null)]);
        setStep(0);
        setPlay(true);
        setSquares(Array(9).fill(null))
        setPlayer('Ходит игрок: X')
        document.querySelector('.field').className = 'field';
    }

    const readHist = ({target}) => {
        setStep(+target.dataset.count)
        const newHist = history.slice(0, +target.dataset.count + 1);
        setHistory(newHist);
        setSquares(newHist[newHist.length-1])
        setPlay(true);
        if (+target.dataset.count % 2) {
            setPlayer('Ходит игрок: O')
        } else {
            setPlayer('Ходит игрок: X')
        }
        document.querySelector('.field').className = 'field';
    }


    return (
        <ul className="hist__list">
            {history.map((item, index) => {
                if (index === 0) {
                    return <li key={Math.random()} className="item__hist" onClick={() => goStart()}>Старт</li>
                } else {
                    return (<li key={Math.random()} className="item__hist show" data-count={index} onClick={(e) => readHist(e)}>
                                    Ход №{index}
                                <div key={index + 20} className="card__history">
                                    {item.map((el) => {
                                        return <div key={Math.random()} className="inner__card">{el}</div>
                                    })}
                                </div>
                            </li>)
                }
            })}
        </ul>
    )
}

export default History;