import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder.addCase(register.pending, (state, action) => state);
    builder.addCase(register.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user.name = action.payload.user.name;
      state.isLoggedIn = true;
    });
    builder.addCase(register.rejected, (state, action) => state);
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user.name = action.payload.user.name;
      state.isLoggedIn = true;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.token = '';
      state.isLoggedIn = false;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
