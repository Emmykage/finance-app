import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const AlertMessages = () => {
  const {messages} = useSelector(state => state.messages)
  return(
  <div className='border-gray min-h-600 messages bg-white rounded-sm border-light'>
    <div className='p-1'>
      <ul className='flex mt-2 justify-between  items-center'>
        <div className='flex'>

        <li className='border-light px-2 py-1-5 text-sm'><a href="#" className='text-sm font-medium text-light-gray'>Clients</a></li>
        <li className='border-light px-2 text-xs py-1-5'><a href="#" className='text-sm font-medium text-light-gray'>Teams</a></li>
        <li className='border-light px-2 text-xs py-1-5 ml-2 rounded-sm'><a href="#" className='text-sm font-medium text-light-gray ml-2 flex items-center'><CiSearch /><input type="text" placeholder='Search...' className='text-xs py-1-5 border-none outline-none'/></a></li>
               
        </div>
        <div className='bg'>
      
        <li className=' px-2 text-xs py-1-5 flex-end'><a href="#" className='text-sm font-medium text-light-gray'><NavLink to="/admin/messages/compose_message"><FaEnvelopeOpenText/></NavLink> </a></li>
    
        </div>
    </ul>
  </div>

  <div>
    <table>
      <thead className='text-dark'>
        <tr>
        <th className='text-dark text-sm'>Name</th>
        <th className='w-60p text-dark text-sm'>Subject</th>
        <th className='text-dark text-sm' >Date</th>
        </tr>
      </thead>
      <tbody>
        {messages.length < 1 ? <div><p className='text-dark text-center'>No Messages</p></div> : messages.map(message => (
          <tr>
          <td className='font-semibold text-xs  items-center gap-2 '><p className='flex gap-2 text-sm'><span className='wh-5 p-0 flex items-center justify-center rounded-full overflow-hidden'><img src='#' className='' /></span>{ message.user.full_name}</p></td>
          <td className='font-semibold text-sm'>{message.subject}</td>
          <td className='font-medium text-sm'>{message.date}</td>
          </tr>
        ))}

       
       
      </tbody>
    </table>
  </div>
    
  </div>
);
  }

export default AlertMessages;