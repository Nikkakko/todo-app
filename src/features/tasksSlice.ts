import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../app/store';
import { TasksState } from '../types';
import { v4 as uuidv4 } from 'uuid';

// get initial state from local storage if it exists or set it to an empty array

const getInitialState = (): TasksState[] => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    return JSON.parse(storedTasks);
  } else {
    return [];
  }
};

// Define the initial state using that type
const initialState = {
  tasks: getInitialState(),
};

export const tasksSlice = createSlice({
  name: 'taks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string }>) => {
      const Tasks = {
        id: uuidv4(),
        title: action.payload.title,
        IsCompleted: false,
      };
      state.tasks = [Tasks, ...state.tasks];

      //add user to local storage
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    removeTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.filter(todo => todo.id !== action.payload.id);

      // remove user from local storage as well
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    setTodoStatus: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const index = state.tasks.findIndex(todo => todo.id === id);
      state.tasks[index].IsCompleted = !state.tasks[index].IsCompleted;

      //add user to local storage
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, removeTodo, setTodoStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
