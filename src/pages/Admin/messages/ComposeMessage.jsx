import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../../../redux/actions/users'
import { sendMessage } from '../../../redux/actions/message'
import { IoMdClose } from 'react-icons/io';


const ComposeMessage = () => {
    const dispatch = useDispatch()
    const {status, message} = useSelector(state => state.messages)
    const {users} = useSelector(state => state.users)
    const [show, setShow] = useState({display: "hide", border: "none", text: ""})

    const [inputMessage, setInputMessage] = useState({title: "", body: "", recipient_id: ""})
    useEffect(()=> {
        if(status == "success"){
            setInputMessage({title: "", body: ""})
            setShow({display: "show", border: "shadow-green", text: "text-green"})
            setTimeout(() => {
              hide()
            }, 8000);
      
          }else if(status == "failed"){
            setShow({display: "show", border: "shadow-red", text: "text-red"})
            setTimeout(() => {
              hide()
            }, 8000); 
             }else{
            setShow({display: "hide", border: "none", text: ""})
          }
       dispatch(listUsers())

    },[status])

    const handleChange = (e)=> {
        setInputMessage({
            ...inputMessage,
            [e.target.name]: e.target.value,
        })


    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(sendMessage(inputMessage))
    }
    const hide = ()=> {
        setShow({display: "hide", border: "none", text: ""})
      }

  return (
    <div className='bg-white rounded-sm min-h-600 py-2 composemessage'>
        <div className={`z-index-90 ${show.display} bg-white fixed justify-between max-600 ${show.border} rounded-lg p-1 font-medium items-center`}>
      <div className={`flex-1 mr-2 ${show.text}`}>{message}</div>
      <div className='flex items-center' ><IoMdClose className="text-2xl text-gray" onClick={hide} /></div>
    </div>
         <div className='p-1'>
      <ul className='flex mt-2 justify-between  items-center'>
        <div className='flex'>

        <li className='border-light px-2 py-1-5 text-sm'><a href="#" className='text-sm font-medium text-light-gray'>Clients</a></li>
        <li className='border-light px-2 text-xs py-1-5'><a href="#" className='text-sm font-medium text-light-gray'>Teams</a></li>
        {/* <li className='border-light px-2 text-xs py-1-5 ml-2 rounded-sm'><a href="#" className='text-sm font-medium text-light-gray ml-2 flex items-center'><CiSearch /><input type="text" placeholder='Search...' className='text-xs py-1-5 border-none outline-none'/></a></li> */}
               
        </div>
        <div className='bg'>
      
        <li className=' px-2 text-xs py-1-5 flex-end'>
            <select name="recipient_id" id="" className='text-sm text-gray p-0-5' onChange={handleChange}>
            <option value={null}>--Select recipient--</option>

                {users.map(user => (
                <option className='text-sm my-1' value={user.id}>{user.full_name}</option>

                ))}
            </select></li>
        </div>
    </ul>
    </div>
        <form onSubmit={handleSubmit} className='bg-re px-2'>
            <div>
                <input name='title' type="text" placeholder='Subject' className='bg-gree w-full rounded-sm p-2 text-sm' value={inputMessage.title} onChange={handleChange}/>
            </div>
            <div><label htmlFor="body" className='text-sm font-semibold text-dark'>Body</label>
                <textarea name="body" id="" cols="30" rows="10" className='w-full rounded-sm' onChange={handleChange} value={inputMessage.body}></textarea>
            </div>
            <button className='mt-2 py-1-5 block w-full btn'> Send Message</button>
        </form>
    </div>
  )
}

export default ComposeMessage