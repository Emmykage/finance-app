import React from 'react'
import "./client.css"
import { useParams } from 'react-router-dom'

const ClientsPage = () => {
const {id} = useParams();



  return (
    <div className='profile'>
        
        <div className='profile-top'>
            <img src="" alt="profile pic" />
        </div>
        <div className='profile-detail'>
            <ul className=''>
                <li className='flex-space '>
                    <span>Name: </span> <span> John Doe</span>

                </li>
                <li className='flex-space '>
                    <span>Email: </span> <span> Johndoe102@gmail.com</span>

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
                <div>

                </div>
            </div>
            <div>
               
                <div>

                </div>
            </div>
            <div>
                <div className='asset-info flex-space'>
                    <span>Crypto</span>
                    <span>$10,000</span>
                </div>
                <div>

                </div>
            </div>

        </div>
        
    </div>
  )
}

export default ClientsPage