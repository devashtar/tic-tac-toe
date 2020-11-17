import React from 'react';
import './style.css';

function Square({val, i}) {


    return (
        <div className="square" data-pos={i}>
            {val}
        </div>
    )
}

export default Square;