import React, { useEffect } from 'react'
import "./client.css"
import { useParams } from 'react-router-dom'
import default_photo from '../../../assets/user/no-profile-picture-icon-14.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, listUsers } from '../../../redux/actions/users'

const ClientsPage = () => {
const {id} = useParams();
const dispatch = useDispatch()
const {user} = useSelector(state => state.users)
useEffect(()=> {
    dispatch(getUser(id))
},[])

// const user = users.find(user => user.id == id)


  return (
    <div className='profile'>
        
        <div className='profile-top'>
            <img src={default_photo} alt="profile pic" />
        </div>
        <div className='profile-detail'>
            <ul className=''>
                <li className='flex-space '>
                    <span>Name: </span> <span> {user.first_name} {user.last_name}</span>

                </li>
                <li className='flex-space '>
                    <span>Email: </span> <span> {user.email}</span>

                </li>
                <li className='flex-space '>
                    <span>Mobile: </span> <span> +1 703 544 3435</span>

                </li>
                <li className='flex-space '>
                    <span>Address: </span> <span> John Doe</span>

                </li>
            </ul>

        </div>
        <hr />
        <div className='asset-details'>
            <p>
                <span>
                total inestment 0  
                </span>
                <span>
                value: 200000
                </span>
            </p>
          
            <div className='asset-infos'>
                <a href=""></a>
               
                <div className='asset-info flex-space'>
                    <span>Crypto</span>
                    <span>$10,000</span>
                </div>
                
                <div className='asset-info flex-space'>
                    <span>Real Estate</span>
                    <span>$20,000</span>
                </div>
                <div className='asset-info flex-space'>
                <span>Crypto</span>
                    <span>$10,000</span>

                </div>
            </div>
                <hr />
            
                <span>
                    Edit
                </span>
        </div>
        
    </div>
  )
}

export default ClientsPage