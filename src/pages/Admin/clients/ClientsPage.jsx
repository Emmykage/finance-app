import React, { useEffect } from 'react'
import "./client.css"
import { useParams } from 'react-router-dom'
import default_photo from '../../../assets/user/no-profile-picture-icon-14.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../../../redux/actions/users'
import { userLog } from '../../../redux/auth/user_authentication'
import Loader from '../../../components/loader/Loader'
const ClientsPage = () => {
const {id} = useParams();
const dispatch = useDispatch()
const {users} = useSelector(state => state.users)
useEffect(()=> {
    dispatch(listUsers())
    dispatch(userLog())
},[])

const user = users.find(user => user.id == id)

if(user == undefined){
    return(
        <Loader/>
    )
}else{



  return (
    <div className='client-profile'>
        
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
                total inestment 
                </span>
                <span>
                value: 200000
                </span>
            </p>
            <hr />
            {user.portfolios.length < 1 ? <h3>User has no Portfolios</h3> : 
            
            user.portfolios.map(portfolio => (
                 <div className='asset-infos'>
                 <a href=""></a>
                
                 <div className='asset-info flex-space'>
                     <span>{portfolio.asset.asset_type}</span>
                     <span>${portfolio.amount}</span>
                 </div>
                 
                
             </div>
            ))}
        
          
           
        <hr />
            
                <span>
                    Edit
                </span>
        </div>
        
    </div>
  )
}
}

export default ClientsPage