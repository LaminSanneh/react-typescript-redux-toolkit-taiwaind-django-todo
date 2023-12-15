import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TodoActionTypes, Todo, TodoAction } from '../actions/types';

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
    }
  }

})

// const todoReducer = (state = initialState, action: TodoAction): TodoState => {
//   switch (action.type) {
//     case TodoActionTypes.ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };
//     case TodoActionTypes.FETCH_TODOS_START:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case TodoActionTypes.FETCH_TODOS_SUCCESS:
//       debugger
//       return {
//         ...state,
//         loading: false,
//         todos: action.payload,
//       };
//     case TodoActionTypes.FETCH_TODOS_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case TodoActionTypes.FETCH_TODOS:
//       debugger
//       return {
//         ...state,
//         todos: action.payload,
//       };
//     case TodoActionTypes.EDIT_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
//         ),
//       };
//     case TodoActionTypes.DELETE_TODO:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export default todoReducer;

export const { addTodo, setTodos } = todoSlice.actions;

export default todoSlice.reducer;
