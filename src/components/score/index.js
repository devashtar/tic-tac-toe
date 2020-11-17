import React from 'react';
import './style.css';

function Score({scoreX, scoreO}) {

    return (
        <div className="score">
            <div className="players">X: {scoreX}</div>
            <div>СЧЕТ</div>
            <div className="players">O: {scoreO}</div>
        </div>
    )
}

export default Score;