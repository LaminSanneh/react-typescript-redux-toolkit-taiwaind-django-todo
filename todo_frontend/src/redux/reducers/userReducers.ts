import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginUserAction, RegisterUserAction, User, UserAction } from '../actions/types'; // Import your User type
import api from "../../api/session";

export interface UserState {
  user: { username: string } | null,
  token: string
}

const TOKEN_STORAGE_KEY = 'TOKEN_STORAGE_KEY';

const initialState: UserState = {
  user: null,
  token: localStorage.getItem(TOKEN_STORAGE_KEY) || ''
};

// Create a user slice
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state = initialState, action: PayloadAction<UserAction>): UserState => {
      const token = action.payload.token;
      if (token) {
        // debugger
        localStorage.setItem(TOKEN_STORAGE_KEY, token);
        // debugger
        api.defaults.headers.Authorization = `Token ${token}`;
      } else {
        localStorage.removeItem(TOKEN_STORAGE_KEY);
      }
      return {
        ...state,
        user: action.payload.user,
        token: token
      }
    },
    updateUserToken: (state, action: PayloadAction<string>): void => {
      // debugger
      // const token = localStorage.get(TOKEN_STORAGE_KEY);
      const token = action.payload;
      console.log('log', token);
      console.log('api', api);
      console.log('api', api.defaults);
      // if (token) {
      // localStorage.setItem(TOKEN_STORAGE_KEY, token);
      api.defaults.headers.Authorization = `Token ${token}`;
      // }
    },
    clearUser: (state = initialState) => {
      // debugger;
      api.defaults.headers.Authorization = null;
      localStorage.removeItem(TOKEN_STORAGE_KEY);
    },
  },
});

export const { setUser, clearUser, updateUserToken } = userSlice.actions;

export default userSlice.reducer;
