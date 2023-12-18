import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../actions/types';

export interface TodoState {
  todos: Todo[];
  loading?: boolean,
  error?: any
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    hydratefetchedTodo: (state, action: PayloadAction<Todo>) => {
      const todoUpdateValues = action.payload;
      const todoToUpdateIndex = state.todos.findIndex((todo) => {
        return todo.id === todoUpdateValues.id;
      });

      debugger;
      state.todos[todoToUpdateIndex] = { ...todoUpdateValues, ...state.todos[todoToUpdateIndex] }
    }
  }

})

export const { addTodo, setTodos, hydratefetchedTodo } = todoSlice.actions;

export default todoSlice.reducer;
