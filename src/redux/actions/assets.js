import { createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from '../url';

const token = () => JSON.parse(localStorage.getItem('edge_auth')).token;

const createAsset = createAsyncThunk('asset/create_asset', async (data) => {
  const response = await fetch(`${baseUrl}assets`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token()}`,

    },
    body: data,
  }).then((res) => res.json());
  return response;
});

const getAssets = createAsyncThunk('asset/get_assets', async (data) => {
  const response = await fetch(`${baseUrl}assets`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,

    },

  }).then((res) => res.json());
  return response;
});

export { createAsset, getAssets };
