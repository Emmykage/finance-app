import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAsset } from '../../../redux/actions/assets'

const AddAsset = () => {
  const [toggleForm, setToggleForm] = useState('false')
  const dispatch = useDispatch()
  const [assetForm, setAssetForm] = useState({asset_name: "", minimum_investment: "",  term: "", payment_schedule: ""})
  const [formData, setFormData] = useState({
    title: ""
  })
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
    <div className='assets-forms'>
      <div className='asset-div border'>

      
      <span onClick={() => setToggleForm(!toggleForm)}>Add Asset</span>
      <form onSubmit= {handleSubmit} className={toggleForm && "hide-form"}>
      <div >
          <label>Asset Type</label>
          <select
          onChange={handleInput}>
            <option value={'Art'}>Art</option>
            <option value={'Real Estate'}>Real Estate</option>
            <option value={'Venture Capital'}>Venture Capital</option>
            <option value={'Private Equity'}>Private Equity</option>
            <option value={'Private Credit Estate'}>Private Credit Estate</option>
            <option value={'Crypto'}>Crypto</option>
            <option value={'Short Term Note'}>Short Term Note</option>
            <option value={'Diversified Funds'}>Diversified Funds</option>
            <option value={'Transportation'}>Transportation</option>
          </select>

        </div>
        <div>
          <label>Asset</label>
          <input type="text" id='asset_name' name="asset_name" value={assetForm.asset_name} onChange={handleInput} />
        </div>
        <div>
          <label>Min. Investment</label>
          <input type="text" id='minimum_investment' name="minimum_investment" value={assetForm.minimum_investment} onChange={handleInput} />
        </div>
        
        
        <div>
          <label>Payment Schedule</label>
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
        <div> <labal>Annual Management fee</labal>
        <input type="number" name='management_fee' value={''} />
        </div>
        <div> <labal>Share In Excess Profit</labal>
        <input type="number" name='management_fee' value={''} />
        </div>
      
        <h4>Schedule</h4>
        <div>
          <label>Term</label>
          <input type="text" name="term" id='term' value={assetForm.term} onChange={handleInput} />
        </div>
        <h4>Structure</h4>
        <div>
          <label>Annual Flat Expense</label>
          <input type="number" name="flat_expense" id='term' value={assetForm.term} onChange={handleInput} />
        </div>

        <h3>Overview</h3>
        <div>
          <label>Description</label>
          <textarea name="overview_description" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label>Overview note</label>
          <textarea name="note" id="" cols="30" rows="10"></textarea>
        </div>


        <button className='btn' type='submit'> create assets</button>
      </form>
      </div>

      <div className='asset-div mx-5'><span>Add Transport</span></div>
      <div className='asset-div'><span>Add Crypto</span></div>
      <div className='asset-div'><span>Add Art</span></div>
    </div>
  )
}

export default AddAsset