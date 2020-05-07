import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {

  return (
    <nav className='nav'>
      <ul>
        <li className='navLink'>
          <NavLink to='/' exact activeClassName='active' >
            Home
          </NavLink>
        </li>
        <li  className='navLink'>
          <NavLink to='/new' exact activeClassName='active' >
            New Question
          </NavLink>
        </li>
        <li  className='navLink'>
          <NavLink to='/leaderboard' exact activeClassName='active' >
            Leader Board
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}