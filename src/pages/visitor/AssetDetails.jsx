import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getAssets } from '../../redux/assets/assets'
import { useParams } from 'react-router-dom';
import AssetHeader from '../../components/guest/header/AssetHeader';
import { getAssets } from '../../redux/actions/assets';
import AssetComp from '../../components/AssetComponent';
import Loader from '../../components/loader/Loader';
import { toggleMenuClose } from '../../redux/model/nav';

const AssetDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { offers, loading, error } = useSelector((state) => state.assets);
  useEffect(() => {
    dispatch(getAssets());
    dispatch(toggleMenuClose());
  }, []);

  const asset = offers.find((asset) => asset.id == id);
  return (
    <>
      <AssetHeader />
      <div className="content-container">
        {loading ? <Loader /> : (error ? <h2 className="text-center text-dark"> No Internet Connection </h2> : <AssetComp asset={asset} />)}
      </div>

    </>
  );
};

export default AssetDetails;
