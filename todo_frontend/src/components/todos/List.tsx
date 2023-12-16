import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppSelector } from '../../redux/store';
import { AppDispatch } from '../../redux/store';
import { addNewTodo, fetchTodos } from '../../redux/actions/todoActions';
import { Todo, TodoToCreate } from '../../redux/actions/types';
import { Link, useNavigate } from 'react-router-dom';
import DeleteButton from './Delete';
import api from "../../api/session";
import './List.css';

const TodoList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const todos = useAppSelector((state: RootState) => state.todos.todos);
  // const userState = useAppSelector((state: RootState) => state.users);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('temp description');
  // const [fetchedTodos, setFetchedTodos] = useState(false);

  console.log("here 2", todos)
  // console.log("here 3", userState)

  useEffect(() => {
    // debugger;
    // if (!userState.token) {
    //   return null;
    // }

    // console.log('before dispatch fetch todos');
    // console.log(api.defaults.headers);
    // console.log(api.defaults.headers.Authorization);
    // if (fetchedTodos) {
    //   debugger;
    //   return;
    // }
    // if (fetchedTodos) {
    //   return;
    // }

    // setFetchedTodos(true);
    dispatch(fetchTodos())
      .then((e) => {
        // setFetchedTodos(true);
        debugger

        console.log("Fetched");
        console.log(api.defaults.headers);
        if (e?.meta?.requestStatus === "rejected") {
          navigate('/login');
        }
      });
  }, [dispatch, navigate]);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: TodoToCreate = { title, description };
    dispatch(addNewTodo(newTodo)).then(() => {
      // navigate('/');
    });
    setTitle('');
    setDescription('');
  };

  console.log("Here")
  console.log(todos)

  let todosList;
  debugger
  if (todos?.length === 0) {
    todosList = (
      <>No todos found</>
    )
  } else {
    todosList = todos.map((todo: Todo, index: number) => {
      // return (
      //   <li key={todo.id}>
      //     <span>{todo.title}</span>
      //     <span>{todo.description}</span>
      //   </li>
      // )
      return (
        <li key={index} className="todo-item">
          <p>{todo.title}</p>
          <div className="todo-buttons">
            <button className="todo-button" onClick={() => { }}>
              Done
            </button>
            <DeleteButton todoId={todo.id} />
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
        <form onSubmit={handleAddTodo} className="todo-form">
          <input
            type="text"
            className="todo-input"
            value={title}
            id="todoInput"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a new todo"
          />

          {/* <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" /> */}
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
