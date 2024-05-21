import { createReducer } from '@reduxjs/toolkit';
import { addTask, toggleTaskCompletion, deleteTask, setTasks } from './actions';
import { ITask, LocalStorageKeys } from '@/model/constant';

const initialState: ITask[] = [];

const taskReducer = createReducer(initialState, builder => {
  builder
    .addCase(addTask, (state, action) => {
      state.push(action.payload);
      localStorage.setItem(LocalStorageKeys.TASKS, JSON.stringify(state));
    })
    .addCase(toggleTaskCompletion, (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) task.completed = !task.completed;
      localStorage.setItem(LocalStorageKeys.TASKS, JSON.stringify(state));
    })
    .addCase(deleteTask, (state, action) => {
      const updatedState = state.filter(task => task.id !== action.payload);
      localStorage.setItem(LocalStorageKeys.TASKS, JSON.stringify(updatedState));
      return updatedState;
    })
    .addCase(setTasks, (state, action) => {
      return action.payload;
    });
});

export default taskReducer;
