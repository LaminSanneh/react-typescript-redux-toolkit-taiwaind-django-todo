// import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import { useDispatch } from 'react-redux'
// import rootReducer from './reducers';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import todoReducer from './reducers/todoReducers';
import userReducer from './reducers/userReducers';

// const store = createStore(rootReducer, applyMiddleware(thunk));
// const store = configureStore({
//     reducer: rootReducer,
//     // Other configurations if needed (middleware, dev tools, etc.)
//   });

//   export type RootState = ReturnType<typeof store.getState>;

//   export type AppDispatch = typeof store.dispatch;
//   export const useAppDispatch: () => AppDispatch = useDispatch; // Expos

//   export default store;
const store = configureStore({
    reducer: {
        todos: todoReducer,
        users: userReducer
    },
    // Other configurations if needed (middleware, dev tools, etc.)
});

export type RootState = ReturnType<typeof store.getState>;

//   export type AppDispatch = typeof store.dispatch;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;