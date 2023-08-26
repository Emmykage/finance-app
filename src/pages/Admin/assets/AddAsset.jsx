import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAsset } from '../../../redux/actions/assets'

const AddAsset = () => {
  const [toggleForm, setToggleForm] = useState('false')
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
    
  }
  console.log(toggleForm)
  return (
    <div className='asset'>
      <span onClick={() => setToggleForm(!toggleForm)}>Add Asset</span>
      <form onSubmit= {handleSubmit} className={toggleForm && "hide-form"}>
        <div>
          <label>Asset</label>
          <input type="text" id='asset_name' name="asset_name" value={assetForm.asset_name} onChange={handleInput} />
        </div>
        <div>
          <label>Min. Investment</label>
          <input type="text" id='minimum_investment' name="minimum_investment" value={assetForm.minimum_investment} onChange={handleInput} />
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
        <h3>Details</h3>
        <h4>Return & Management fees</h4>
        <div> <labal>Annual MAnagement fee</labal>
        <input type="number" name='management_fee' value={''} />
        </div>
        <div> <labal>Share in excess profit</labal>
        <input type="number" name='management_fee' value={''} />
        </div>
      
        <h4>Schedule</h4>
        <div>
          <label>Term</label>
          <input type="text" name="term" id='term' value={assetForm.term} onChange={handleInput} />
        </div>
        <h4>Structure</h4>
        <div>
          <label>Annual flat expense</label>
          <input type="number" name="flat_expense" id='term' value={assetForm.term} onChange={handleInput} />
        </div>

        <h3>Overview</h3>
        <div>
          <label>descriptione</label>
          <textarea name="overview_description" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label>over view note</label>
          <textarea name="note" id="" cols="30" rows="10"></textarea>
        </div>


        <button className='btn' type='submit'> create assets</button>
      </form>

      <div><h2>add crypto</h2></div>
    </div>
  )
}

export default AddAsset