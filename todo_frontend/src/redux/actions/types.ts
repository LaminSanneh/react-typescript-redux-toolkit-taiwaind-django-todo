import { UnknownAction } from "redux";

export interface Todo {
  id?: number;
  title: string;
  description: string;
}

export interface User {
  username: string;
  password: string;
}

export interface LoggedInUser {
  user: { username: string },
  token: string
}

const FETCH_TODOS_START = 'FETCH_TODOS_START';
const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export enum TodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  FETCH_TODOS = 'FETCH_TODOS',
  EDIT_TODO = 'EDIT_TODO',
  DELETE_TODO = 'DELETE_TODO',
  FETCH_TODOS_START = 'FETCH_TODOS_START',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE'
}

export interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO;
  payload: Todo;
}

export interface FetchTodosAction {
  type: TodoActionTypes.FETCH_TODOS;
  payload: Todo[];
}

export interface EditTodoAction {
  type: TodoActionTypes.EDIT_TODO;
  payload: { id: number; todo: Todo };
}

export interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO;
  payload: number; // ID of the todo to delete
}

export interface FetchTodosStartAction {
  type: typeof FETCH_TODOS_START;
}

export interface FetchTodosSuccessAction {
  type: typeof FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

export interface FetchTodosFailureAction {
  type: typeof FETCH_TODOS_FAILURE;
  payload: string;
}

export enum UserActionTypes {
  REGISTER_USER = 'REGISTER_USER',
  LOGIN_USER = 'LOGIN_USER',
  SET_USER_TOKEN = 'SET_USER_TOKEN'
}

export interface RegisterUserAction {
  type: UserActionTypes.REGISTER_USER;
  payload: User;
}

export interface LoginUserAction {
  type: UserActionTypes.LOGIN_USER;
  payload: LoggedInUser;
}

export interface SetUserTokenAction {
  type: UserActionTypes.SET_USER_TOKEN;
  payload: string;
}

export type TodoAction = AddTodoAction
  | FetchTodosAction
  | EditTodoAction
  | DeleteTodoAction
  | FetchTodosStartAction
  | FetchTodosSuccessAction
  | FetchTodosFailureAction;

export type UserAction = LoggedInUser
// | SetUserTokenAction