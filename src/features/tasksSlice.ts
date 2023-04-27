import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../app/store';
import { TasksState } from '../types';
import { v4 as uuidv4 } from 'uuid';

// Define the initial state using that type
const initialState = {
  tasks: [] as TasksState[],
};

export const tasksSlice = createSlice({
  name: 'taks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string }>) => {
      state.tasks.push({
        id: uuidv4(),
        title: action.payload.title,
        IsCompleted: false,
      });
    },

    removeTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.filter(todo => todo.id !== action.payload.id);
    },

    setTodoStatus: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const index = state.tasks.findIndex(todo => todo.id === id);
      state.tasks[index].IsCompleted = !state.tasks[index].IsCompleted;
    },
  },
});

export const { addTask, removeTodo, setTodoStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
