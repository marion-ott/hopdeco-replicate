import React from 'react'
import './style.scss'
import Link from './../UI/Link/Link.jsx'

const TopNav = ({ links }) => (
    <ul className="TopNav">
        {
            links.map((link, key) => (
                <li key={key}>
                    <Link label={link.label} href={link.href} />
                </li>
            ))
        }
    </ul>
)

export default TopNav
