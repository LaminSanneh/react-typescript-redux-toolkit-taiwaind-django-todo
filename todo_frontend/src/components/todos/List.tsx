import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppSelector } from '../../redux/store';
import { AppDispatch } from '../../redux/store';
import { fetchTodos } from '../../redux/actions/todoActions';
import { Todo } from '../../redux/actions/types';
import { Link } from 'react-router-dom';

const TodoList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useAppSelector((state: RootState) => state.todos.todos);
  const users = useAppSelector((state: RootState) => state.users.user);

  console.log("here 2", todos)
  console.log("here 3", users)

  useEffect(() => {
    dispatch(fetchTodos());
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
      return <li key={todo.id}>
        <span>{todo.title}</span>
        <span>{todo.description}</span>
      </li>
    });
  }

  return (
    <div>
      <Link to="/create">Add New Todo</Link>
      <ul>
        {todosList}
      </ul>
    </div>
  );
};

export default TodoList;
