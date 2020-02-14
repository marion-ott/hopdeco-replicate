import React from 'react'
import './style.scss'

const Text = ({ text, align }) => (
    <div className={`Text ${align}`}>
        <p>{ text }</p>
    </div>
)

export default Text
