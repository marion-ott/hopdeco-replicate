import React from 'react'
import './style.scss'

const Grid = () => (
    <div className="Grid">
        <div>
            <div className="Grid-vertical"></div>
            <div className="Grid-vertical"></div>
            <div className="Grid-vertical"></div>
        </div>
        <div>
            <div className="Grid-horizontal"></div>
            <div className="Grid-horizontal"></div>
        </div>
        <div className="Grid-circleContainer">
            <div></div>
        </div>
    </div>
)

export default Grid
