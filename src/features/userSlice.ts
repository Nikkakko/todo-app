import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

interface UserState {
  name: string;
  image: string;
}

const initialState: UserState = {
  name: '',
  image: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.image = action.payload.image;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
