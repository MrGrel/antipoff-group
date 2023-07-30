import { IToken } from '../../types/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getTokenLogin, getTokenRegistration } from '../actionCreator';

const initialState: IToken = {
  token: '',
  isLoading: false,
  error: '',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    logOut(state) {
      state.token = '';
    },
  },
  extraReducers: {
    [getTokenRegistration.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getTokenRegistration.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = '';
      state.token = action.payload;
    },
    [getTokenRegistration.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [getTokenLogin.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getTokenLogin.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = '';
      state.token = action.payload;
    },
    [getTokenLogin.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default tokenSlice.reducer;
