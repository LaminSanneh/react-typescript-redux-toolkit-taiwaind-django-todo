import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../redux/actions/todoActions';
import { AppDispatch } from '../../redux/store';
import { Todo } from '../../redux/actions/types';

interface EditTodoProps {
  todoId: number;
}

const EditTodoForm: React.FC<EditTodoProps> = ({ todoId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const currentTitle = ''
  const currentDescription = ''
  const [title, setTitle] = useState(currentTitle);
  const [description, setDescription] = useState(currentDescription);

  const handleEditTodo = () => {
    const todo: Todo = { title, description };
    dispatch(editTodo({ id: todoId, ...todo }));
  };

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleEditTodo}>Save Changes</button>
    </div>
  );
};

export default EditTodoForm;
