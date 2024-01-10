import React from 'react';
import RealEstate from './RealEstate';
import Transport from './Transport';
import Crypto from './Crypto';
import Art from './Art';

const AddAsset = () => (
  <div className="assets-forms">
    <RealEstate />
    <Transport />
    <Crypto />
    <Art />
  </div>
);

export default AddAsset;
