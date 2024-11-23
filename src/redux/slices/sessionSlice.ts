import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SessionSliceType } from './types';

const initialState: SessionSliceType = {
  user: null,
};

export const sessionSlice = createSlice({
  name: 'sessionSlice',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
});

export const { signIn } = sessionSlice.actions;
export default sessionSlice.reducer;
