import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Import your RootState type
import api from "../../api/session";
import { UserActionTypes, User } from './types';
import { setUser, updateUserToken } from '../reducers/userReducers';
import store from '../store';

// Mock API endpoint for user registration
const registrationAPI = '/api/register-user/';
const loginAPI = '/api-token-auth/';
const TOKEN_STORAGE_KEY = 'TOKEN_STORAGE_KEY';

// Define an async thunk for user registration
export const registerUser = createAsyncThunk<User, { username: string; password: string }, { state: RootState }>(
  UserActionTypes.REGISTER_USER,
  async ({ username, password }) => {
    try {
      const response = await api.post(registrationAPI, { username, password });
      const data: User = await response.data;
      return data;
    } catch (error) {
      throw new Error('Failed to register');
    }
  }
);

export const loginUser = createAsyncThunk<string, { username: string; password: string }, { state: RootState }>(
  UserActionTypes.LOGIN_USER,
  async ({ username, password }, { dispatch }) => {
    try {
      const response = await api.post(loginAPI, { username, password });
      // debugger
      const token = await response.data.token;
      dispatch(setUser({
        user: {
          username
        },
        token: token
      }));
      // console.log("state", state);
      return token;
    } catch (error) {
      throw new Error('Failed to login');
    }
  }
);

// export const setUserToken = createAction(UserActionTypes.SET_USER_TOKEN);
export const setUserToken = createAsyncThunk<void, string>(
  UserActionTypes.SET_USER_TOKEN,
  async (token, { dispatch }) => {
    try {
      dispatch(updateUserToken(token));
      // return token;
    } catch (error) {
      throw new Error('Failed to login');
    }
  }
);
