import React from 'react'
import { NavLink } from 'react-router-dom'
import './client.css'
import { useSelector } from 'react-redux'

const Clients = () => {
  const {users}  = useSelector(state => state.users)
  console.log(users)
  return (
    <div className='client'>
        <div className=''>
            <ul className='client-row'>
              {users.map((user) => (
                <li key={user.id} className='p-1 m-2 b-radius-2 space-flex border flex-justify-space border-light'>
                <span>Client Name: {user.first_name +" " + user.last_name} </span>
                <span><NavLink to={'/admin/client/'+user.id }>View</NavLink></span>
            </li>

              ))}
                
            </ul>
        </div>
    </div>
  )
}

export default Clients