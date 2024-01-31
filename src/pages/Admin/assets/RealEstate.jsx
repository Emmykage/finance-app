import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAsset } from '../../../redux/actions/assets';

const RealEstate = () => {
  const dispatch = useDispatch();
  const [toggleForm, setToggleForm] = useState('false');
  const {status, message} = useSelector(state => state.assets)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('asset[asset_category]', e.target.asset_category.value)
    formData.append('asset[minimum_investment]', e.target.minimum_investment.value)
    formData.append('asset[term]', e.target.term.value)
    formData.append('asset[title]', e.target.title.value)
    formData.append('asset[description]', e.target.description.value)
    formData.append('asset[share_in_excess]', e.target.share_in_excess.value)
    formData.append('asset[annual_mangt_fee]', e.target.annual_flat_expense.value)
    formData.append('asset[overview_description]', e.target.overview_description.value)
    formData.append('asset[overview_note]', e.target.overview_note.value)
    formData.append('asset[asset_category]', e.target.asset_category.value)
    formData.append('asset[return]', e.target.return.value)
    formData.append('asset[image]', e.target.image.files[0])

    const data = Object.fromEntries(formData)
    console.log(data)
    dispatch(createAsset(formData));

  };
  return (
    <div className="asset-div border">
      <div className='flex justify-between'>
      <span onClick={() => setToggleForm(!toggleForm)}>Add Real Estate</span>
      </div>

      <form onSubmit={handleSubmit} className={toggleForm && 'hide-form'}>

        <div>
          <label className='text-sm'>Real Estate Category</label>
          <input type="text" id="asset_category" name="asset_category"  />
        </div>
        <div>
          <label className='text-sm'>Min. Investment</label>
          <input type="text" id="minimum_investment" name="minimum_investment" />
        </div>
        <div>
          <label className='text-sm'>Target Return</label>
          <input type="text" id="return" name="return" required />
        </div>
        <div>
          <label className='text-sm'>Payment Schedule</label>
          {/* <input type="text" name="payment_schedule" value={assetForm.payment_schedule} onChange={handleInput} /> */}
          <select
            name="payment_schedule"
            id="payment_schedule"
           
          >
            <option value="event Based">Event based </option>
            <option value="monthly">Monthly </option>
            <option value="quarterly">Quarterly </option>
            <option value="biannually">Biannually  </option>
            <option value="yearly">Yearly based </option>

          </select>
        </div>
        <h3>Details</h3>
        <div>
          {' '}
          <labal className='text-sm'>Title</labal>
          <input type="text" name="title"  />
        </div>
        <div>
          {' '}
          <labal className='text-sm'>Description</labal>
          <input type="text" name="description" />
        </div>
        <h4>Return & Management fees</h4>
        <div>
          {' '}
          <labal className='text-sm'>Annual Management fee</labal>
          <input type="number" name="annual_mangt_fee" />
        </div>
        <div>
          {' '}
          <labal className='text-sm'>Share In Excess Profit</labal>
          <input type="number" name="share_in_excess" />
        </div>

        <h4>Schedule</h4>
        <div>
          <label className='text-sm'>Term</label>
          <input type="text" name="term" id="term"  />
        </div>
        <h4>Structure</h4>
        <div>
          <label className='text-sm'>Annual Flat Expense</label>
          <input type="number" name="annual_flat_expense" id="annual_flat_expense" />
        </div>

        <div>
          <label className='text-sm'>image upload</label>
          <input type="file" name="image" id="image"/>
        </div>

        <h3>Overview</h3>
        <div>
          <label className='text-sm'>Description</label>
          <textarea  name="overview_description" id="" cols="30" rows="10" />
        </div>
        <div>
          <label className='text-sm'>Overview note</label>
          <textarea  name="overview_note" id="" cols="30" rows="10" />
        </div>

        <button className="btn" type="submit"> create assets</button>
      </form>

    </div>
  );
};

export default RealEstate;
