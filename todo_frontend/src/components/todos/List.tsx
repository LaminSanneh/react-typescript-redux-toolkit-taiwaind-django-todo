import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RootState, useAppSelector } from '../../redux/store';
import { AppDispatch } from '../../redux/store';
import { fetchTodos } from '../../redux/actions/todoActions';
import { Todo } from '../../redux/actions/types';
import { Link, useNavigate } from 'react-router-dom';
import DeleteButton from './Delete';
import api from "../../api/session";
import './List.css';

const TodoList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const todos = useAppSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    dispatch(fetchTodos())
      .then((e) => {
        if (e?.meta?.requestStatus === "rejected") {
          navigate('/login');
        }
      });
  }, [dispatch, navigate]);

  // ===== Dont need the below in lists page but ;eaving here incase it's needed

  // const [title, setTitle] = useState<string>('');
  // const [description, setDescription] = useState<string>('temp description');
  // const [todoProperties, setTodoProperties] = useState<TodoToCreate>({ title: '', description: '' });

  // const performAddNewTodoAction = async (newTodoValues: TodoToCreate) => {
  //   const result = await dispatch(addNewTodo(newTodoValues)).unwrap();
  //   return result;
  // }

  // const handleAddTodoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const newTodo: TodoToCreate = { title, description };
  //   const result = await performAddNewTodoAction(newTodo);

  //   setTitle('');
  //   setDescription('');
  // };

  // =====

  const afterDeleteCallback = () => {
    dispatch(fetchTodos());
  }

  let todosList;
  if (todos?.length === 0) {
    todosList = (
      <div className='no-todos-found-message'>No todos found</div>
    )
  } else {
    todosList = todos.map((todo: Todo, index: number) => {
      return (
        <li key={index} className="todo-item">
          <p>{todo.title}</p>
          <div className="todo-buttons">
            <button className="todo-button" onClick={() => { }}>
              Done
            </button>
            <DeleteButton afterDeleteCallback={afterDeleteCallback} todoId={todo.id} />
            <Link className="todo-button" to={`/edit/${todo.id}`}>Edit</Link>
          </div>
        </li>
      )
    });
  }

  return (
    <div>
      <div className="todo-container">
        <div className="todo-header">
          <h1>Todo App</h1>
        </div>
        <div className="todo-buttons add-todo-button-container">
          <Link to="/create" className="todo-button">Add Todo</Link>
        </div>
        <ul className="todo-list" id="todoList">
          {todosList}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
