import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',

  initialState: '',

  reducers: {
    setFilterValue(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const filtersReducer = filterSlice.reducer;
export const { setFilterValue } = filterSlice.actions;
