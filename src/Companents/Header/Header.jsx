import React from 'react'
import { menuArray } from '../Data/Data'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        
        <div className='header'>
            <ul>
                {
                    menuArray.map((e) => {
                        return <li key={e.id}>
                            <NavLink to={`/${e.menuLink}`}>
                                {e.menuName}
                            </NavLink>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Header