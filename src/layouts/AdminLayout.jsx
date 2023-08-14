import React from 'react'
import Aside from '../components/admin/Aside'
import '../components/admin/style.css'
import Right from '../components/admin/Right'

const AdminLayout = ({children}) => {
  return (
    <div className='admin container'>
      <Aside/>
      {children}
      <Right/>


        
        
    </div>
  )
}

export default AdminLayout