import React from 'react'

const AssetCard = ({asset}) => {
  return (
    <li className='flex-justify-space border m-3 p-2 shadow radius'>
    <div> <span>{asset.asset_type}</span> 
    <p>{asset.title}</p>
  </div>
  <div> <span> view</span> 
    <p>delete</p>
  </div>
    </li>
  )
}

export default AssetCard