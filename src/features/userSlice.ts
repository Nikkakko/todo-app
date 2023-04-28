import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../app/store';

interface User {
  name: string;
  file: File | FileList | string;
}

interface UserState {
  users: User | null;
}

const getInitialState = (): UserState => {
  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    return { users: JSON.parse(storedUsers) };
  } else {
    return { users: null };
  }
};

const initialState: UserState = getInitialState();

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      //add user to state
      state.users = action.payload;

      //add user to local storage
      localStorage.setItem('users', JSON.stringify(state.users));
    },

    logOut: state => {
      // remove user from state
      state.users = null;
      // remove user from local storage as well
      localStorage.removeItem('users');

      //remove tasks from local storage
      localStorage.removeItem('tasks');
    },
  },
});

export const { addUser, logOut } = userSlice.actions;

export default userSlice.reducer;
