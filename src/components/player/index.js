import React from 'react';
import './style.css';

import Score from '../score/index'

function Player({player, scoreX, scoreO}) {

    return (
        <div>
            <div>
                <Score scoreX={scoreX} scoreO={scoreO}/>
            </div>
            <div className="player">
                {player}
            </div>
        </div>

    )
}

export default Player;