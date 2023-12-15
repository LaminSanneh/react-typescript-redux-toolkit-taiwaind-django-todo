import { Dispatch } from 'redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import { TodoActionTypes, Todo, TodoAction } from './types';
import api from "../../api/session";
import { addTodo, setTodos } from '../reducers/todoReducers';

// export const addTodo = (todo: Todo): TodoAction => {
//   return {
//     type: TodoActionTypes.ADD_TODO,
//     payload: todo,
//   };
// };

// export const addTodo = createAction<Todo>(TodoActionTypes.ADD_TODO);

// export const editTodo = createAction<{ id: number; todo: Todo }>(TodoActionTypes.EDIT_TODO);

// export const deleteTodo = createAction<number>(TodoActionTypes.DELETE_TODO);

export const addNewTodo = createAsyncThunk<Todo, Todo>(
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
      const response = await api.put(`/api/todo/{todo.id}/update/`, todo);
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

// export const fetchTodos = createAction(TodoActionTypes.FETCH_TODOS);

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
      return rejectWithValue(error instanceof Error ? ('Error fetching todos: ' + error.message) : undefined);
    }
  }
);

// export const fetchTodos = () => {
//   // Simulating an API call or dispatching an async action
//   // Replace this with actual API call to fetch todos
//   const mockTodos: Todo[] = [
//     { id: 1, title: 'Example Todo 1', description: 'Description 1' },
//     { id: 2, title: 'Example Todo 2', description: 'Description 2' },
//   ];

//   return (dispatch: Dispatch<TodoAction>) => {
//     dispatch({
//       type: TodoActionTypes.FETCH_TODOS,
//       payload: mockTodos,
//     });
//   };
// };

// Implement other action creators (fetchTodos, editTodo, deleteTodo)


// export const addTodo = (todo: Todo) => {
//   return (dispatch: Dispatch<TodoAction>) => {
//     dispatch({
//       type: TodoActionTypes.ADD_TODO,
//       payload: todo,
//     });
//   };
// };

