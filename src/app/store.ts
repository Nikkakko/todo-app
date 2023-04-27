import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasksSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
