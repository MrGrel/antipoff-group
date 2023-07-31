import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISize {
  size: string;
}

const initialState: ISize = {
  size: 'sm',
};

export const resizeSlice = createSlice({
  name: 'resize',
  initialState,
  reducers: {
    resize(state, action: PayloadAction<string>) {
      state.size = action.payload;
    },
  },
});

export default resizeSlice.reducer;
