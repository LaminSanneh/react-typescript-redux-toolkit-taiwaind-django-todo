import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../redux/actions/todoActions';
import { Todo, TodoToCreate } from '../../redux/actions/types';
import { AppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

const CreateTodoForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const navigate = useNavigate();

  const handleAddTodo = () => {
    const newTodo: TodoToCreate = { title, description };
    dispatch(addNewTodo(newTodo)).then(() => {
      navigate('/');
    });
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default CreateTodoForm;
