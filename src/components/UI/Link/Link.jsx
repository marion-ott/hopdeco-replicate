import React from 'react'
import './style.scss'

const Link = ({ label, href }) => (
    <a className="Link" href={href}>{label}</a>
)

export default Link
