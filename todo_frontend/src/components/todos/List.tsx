import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppSelector } from '../../redux/store';
import { AppDispatch } from '../../redux/store';
import { fetchTodos } from '../../redux/actions/todoActions';
import { Todo } from '../../redux/actions/types';
import { Link, useNavigate } from 'react-router-dom';
import api from "../../api/session";
import './List.css';

const TodoList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const todos = useAppSelector((state: RootState) => state.todos.todos);
  const userState = useAppSelector((state: RootState) => state.users);

  console.log("here 2", todos)
  console.log("here 3", userState)

  useEffect(() => {
    // debugger;
    // if (!userState.token) {
    //   return null;
    // }

    // console.log('before dispatch fetch todos');
    // console.log(api.defaults.headers);
    // console.log(api.defaults.headers.Authorization);
    dispatch(fetchTodos())
      .then((e) => {
        debugger

        console.log("Fetched");
        console.log(api.defaults.headers);
        if (e?.meta?.requestStatus === "rejected") {
          navigate('/login');
        }
      });
  }, [dispatch]);

  console.log("Here")
  console.log(todos)

  let todosList;
  debugger
  if (todos?.length === 0) {
    todosList = (
      <>No todos found</>
    )
  } else {
    todosList = todos.map((todo: Todo) => {
      // return (
      //   <li key={todo.id}>
      //     <span>{todo.title}</span>
      //     <span>{todo.description}</span>
      //   </li>
      // )
      return (
        <li className="todo-item">
          <p>hello</p>
          <div className="todo-buttons">
            <button className="todo-button" onClick={() => { }}>
              Done
            </button>
            <button className="todo-button" onClick={() => { }}>
              Delete
            </button>
          </div>
        </li>
      )
    });
  }

  return (
    <div>
      <Link to="/create">Add New Todo</Link>
      <div className="todo-container">
        <div className="todo-header">
          <h1>Todo App</h1>
        </div>
        <form className="todo-form">
          <input
            type="text"
            className="todo-input"
            id="todoInput"
            placeholder="Enter a new todo"
          />
          <div className="todo-buttons">
            <button type="submit" className="todo-button">Add Todo</button>
          </div>
        </form>
        <ul className="todo-list" id="todoList">
          {todosList}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
