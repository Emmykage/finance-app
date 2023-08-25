import React from 'react'
import { NavLink } from 'react-router-dom'

const Clients = () => {
  return (
    <div>
        <div>
            <ul>
                <li className='space-flex'>
                    <span>Client Name: </span>
                    <span><NavLink to={'client/id'}>View</NavLink></span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Clients