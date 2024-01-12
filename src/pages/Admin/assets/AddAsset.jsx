import React, { useEffect, useState } from 'react';
import RealEstate from './RealEstate';
import Transport from './Transport';
import Crypto from './Crypto';
import Art from './Art';
import { useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';

const AddAsset = () => {
  const {status, message} = useSelector(state => state.assets)
  const [show, setShow] = useState({display: "hide", border: "none", text: ""})
  console.log(status)
  useEffect(()=> {
    if(status == "success"){
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
  }, [status])
  const hide = ()=> {
    setShow({display: "hide", border: "none", text: ""})
  }
  
  return(

  <div className="assets-forms relative">

<div className={`z-index-90 ${show.display} bg-white fixed justify-between max-600 ${show.border} rounded-lg p-1 font-medium items-center`}>
      <div className={`flex-1 mr-2 ${show.text}`}>{message}</div>
      <div className='flex items-center' ><IoMdClose className="text-2xl text-gray" onClick={hide} /></div>
    </div>

    
    <RealEstate />
    <Transport />
    <Crypto />
    <Art />
  </div>
);
  }

export default AddAsset;
