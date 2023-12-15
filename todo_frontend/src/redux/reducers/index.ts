import { combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import todoReducer from './todoReducers';
import userReducer from './userReducers';

const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer
  // Other reducers...
});

// const store = configureStore({
//     reducer: rootReducer,
//     // Other configurations if needed (middleware, dev tools, etc.)
//   });

// export type RootState = ReturnType<typeof rootReducer>;

//   export type AppDispatch = typeof store.dispatch;


// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export default rootReducer;
