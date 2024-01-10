import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAssets } from '../../redux/actions/assets';
import AssetComp from '../../components/AssetComponent';
import Deposite from '../../components/features/Deposite';
import Loader from '../../components/loader/Loader';
import { toggleMenuClose } from '../../redux/model/nav';
import Timer from '../../components/misc/Timer';

const UserAssetDetails = () => {
  const { id } = useParams();
  const [toggle, setToggle] = useState(true);
  const [timer, setTimer] = useState(5);
  const dispatch = useDispatch();
  const [portfolio, setPortfolio] = useState({ asset_id: id, amount: 0 });

  const { offers } = useSelector((state) => state.assets);
  useEffect(() => {
    dispatch(getAssets());
    dispatch(toggleMenuClose());

    if (timer == 0) {
      setToggle(false);
    }
  }, [timer]);

  const asset = offers.find((asset) => asset.id == id);
  if (asset) {
    return (
      <>
        {toggle && <Timer timer={timer} setTimer={setTimer} />}
        <AssetComp asset={asset} />
        <Deposite portfolio={portfolio} setPortfolio={setPortfolio} asset={asset} />

      </>
    );
  }
  return (
    <Loader />
  );
};

export default UserAssetDetails;
