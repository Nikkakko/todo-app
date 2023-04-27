import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../app/store';
import { TasksState } from '../types';
import { v4 as uuidv4 } from 'uuid';

// Define the initial state using that type
const initialState = {
  Todos: [] as TasksState[],
};

export const tasksSlice = createSlice({
  name: 'taks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TasksState>) => {
      state.Todos.push({
        id: uuidv4(),
        title: action.payload.title,
        IsCompleted: false,
      });
    },

    removeTodo: (state, action: PayloadAction<TasksState>) => {
      state.Todos = state.Todos.filter(todo => todo.id !== action.payload.id);
    },

    setTodoStatus: (state, action: PayloadAction<TasksState>) => {
      const index = state.Todos.findIndex(
        todo => todo.id === action.payload.id
      );
      state.Todos[index].IsCompleted = action.payload.IsCompleted;
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
