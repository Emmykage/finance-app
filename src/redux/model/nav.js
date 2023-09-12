import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navOpen: false,
};
const navSlice = createSlice({
  name: 'nav_toggle',
  initialState,
  reducers: {
    toggleMenuOpen: (state) => ({
      ...state,
      navOpen: true,
    }),
    toggleMenuClose: (state) => ({
      ...state,
      navOpen: false,
    }),
  },
});

export default navSlice.reducer;
export const { toggleMenuClose, toggleMenuOpen } = navSlice.actions;
