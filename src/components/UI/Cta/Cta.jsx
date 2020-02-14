import React from 'react'
import './style.scss'

const Cta = () => (
    <a className='Cta' href='/'>
        <span className='Cta-text'>Commencer mon projet</span>
        <span className='Cta-circle'>
            <svg id='circle-reverse' viewBox='0 0 75 75'>
                <title>circle-reverse</title>
                <path d='M0,0V75H75V0ZM37.5,66.5a29,29,0,1,1,29-29A29,29,0,0,1,37.5,66.5Z'></path>
            </svg>
        </span>
    </a>
);

export default Cta
