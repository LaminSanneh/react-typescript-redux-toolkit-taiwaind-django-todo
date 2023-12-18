import { Dispatch } from 'redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import { TodoActionTypes, Todo, TodoAction, TodoToCreate } from './types';
import api from "../../api/session";
import { addTodo, hydratefetchedTodo, setTodos } from '../reducers/todoReducers';

export const addNewTodo = createAsyncThunk<Todo, TodoToCreate>(
  TodoActionTypes.ADD_TODO,
  async ({ title, description }, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.post('api/todo/create/', { title, description });
      const data: Todo = await response.data;
      dispatch(addTodo(data));
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? ('Error adding todo: ' + error.message) : undefined);
    }
  }
);

export const editTodo = createAsyncThunk<Todo, Todo>(
  TodoActionTypes.EDIT_TODO,
  async (todo: Todo, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/todo/${todo.id}/update/`, todo);
      const data: Todo = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? ('Error editing todo: ' + error.message) : undefined);
    }
  }
);

export const deleteTodo = createAsyncThunk<void, number>(
  TodoActionTypes.DELETE_TODO,
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`api/todo/{id}/delete/`);
    } catch (error) {
      return rejectWithValue(error instanceof Error ? ('Error deleting todo: ' + error.message) : undefined);
    }
  }
);

export const fetchTodo = createAsyncThunk<Todo, number>(
  TodoActionTypes.FETCH_TODO,
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.get(`/api/todo/fetch-todo/${id}`);
      const data: Todo = await response.data;
      // dispatch(hydratefetchedTodo(data));
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? ('Error fetching todo: ' + error.message) : undefined);
    }
  }
);

export const fetchTodos = createAsyncThunk<Todo[], void>(
  TodoActionTypes.FETCH_TODOS,
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.get('/api/todos/');
      debugger
      const data = await response.data;
      dispatch(setTodos(data))
      return data;
    } catch (error) {
      debugger;
      return rejectWithValue(error instanceof Error ? ('Error fetching todos: ' + error.message) : undefined);
    }
  }
);
