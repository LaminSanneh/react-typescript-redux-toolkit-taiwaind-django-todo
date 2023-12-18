import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/actions/todoActions';
import { AppDispatch } from '../../redux/store';

interface TodoProps {
  todoId: number,
  afterDeleteCallback: () => void
}

const TodoItem: React.FC<TodoProps> = ({ todoId, afterDeleteCallback }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todoId)).then((e) => {
      afterDeleteCallback();
      console.log('deleted');
    });
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
