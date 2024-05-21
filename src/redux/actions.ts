import { ITask } from '@/model/constant';
import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction<ITask>('ADD_TASK');
export const toggleTaskCompletion = createAction<number>('TOGGLE_TASK_COMPLETION');
export const deleteTask = createAction<number>('DELETE_TASK');
export const setTasks = createAction<ITask[]>('SET_TASKS');
