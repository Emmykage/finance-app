import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAsset } from '../../../redux/actions/assets'

const AddAsset = () => {
  const dispatch = useDispatch()
  const [assetForm, setAssetForm] = useState({asset_name: "", minimum_investment: "",  term: "", payment_schedule: ""})
  const  handleInput = (e) =>{
    setAssetForm({
      
      ...assetForm,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(createAsset(assetForm))
    // console.log(assetForm)
  }
  return (
    <div className='asset'>
      <h2>Add Asset</h2>
      <form onSubmit= {handleSubmit}>
        <div>
          <label>Asset</label>
          <input type="text" id='asset_name' name="asset_name" value={assetForm.asset_name} onChange={handleInput} />
        </div>
        <div>
          <label>Min. Investment</label>
          <input type="text" id='minimum_investment' name="minimum_investment" value={assetForm.minimum_investment} onChange={handleInput} />
        </div>
        <div>
          <label>Term</label>
          <input type="text" name="term" id='term' value={assetForm.term} onChange={handleInput} />
        </div>
        
        <div>
          <label>payment_schedule</label>
          {/* <input type="text" name="payment_schedule" value={assetForm.payment_schedule} onChange={handleInput} /> */}
          <select 
          name='payment_schedule' 
          id='payment_schedule' 
          value={assetForm.payment_schedule}
          onChange={handleInput}>
          <option value={"event Based"}>Event based </option>
          <option value={"monthly"}>Monthly </option>
          <option value={"quarterly"}>Quarterly </option>
          <option value={"biannually"}>Biannually  </option>
          <option value={"yearly"}>Yearly based </option>

          </select>
        </div>
        <button className='btn' type='submit'> create assets</button>
      </form>
    </div>
  )
}

export default AddAsset