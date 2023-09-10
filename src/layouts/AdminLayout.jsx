import React, { useEffect } from 'react'
import Aside from '../components/admin/Aside'
import '../components/admin/style.css'
import Right from '../components/admin/Right'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../redux/actions/users'
import Loader from '../components/loader/Loader'

const AdminLayout = ({children}) => {
  const dispatch = useDispatch()
  const {users, loading, error} = useSelector(state => state.users)
  useEffect(()=> {
    dispatch(getUser())
  },[])
  if(loading){

  return(<Loader/>)
}
else{

  if(error){
    <div> <h3>No internet</h3> </div>
  }

  return (
    <div className='admin container'>
      <Aside/>
      <main>
      {children}
      </main>
     
      <Right/>


        
        
    </div>
  )
}
}

export default AdminLayout