import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/actions/todoActions';
import { AppDispatch } from '../../redux/store';

interface TodoProps {
  todoId: number;
}

const TodoItem: React.FC<TodoProps> = ({ todoId }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <>
      <button className="todo-button" onClick={handleDeleteTodo}>
        Delete
      </button>
    </>
    // <div>
    //   <span>{todoId}</span>
    //   <button onClick={handleDeleteTodo}>Delete</button>
    // </div>
  );
};

export default TodoItem;
