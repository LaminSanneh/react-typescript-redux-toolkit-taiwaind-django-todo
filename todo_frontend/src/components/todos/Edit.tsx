import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, fetchTodo } from '../../redux/actions/todoActions';
import { AppDispatch } from '../../redux/store';
import { Todo } from '../../redux/actions/types';
import { useNavigate, useParams } from 'react-router-dom';

const EditTodoForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { todoId } = useParams();
  const todoIdNumber = parseInt(todoId + '');
  const [todoProperties, setTodoProperties] = useState<Todo>({ id: todoIdNumber, title: '', description: '' });

  useEffect(() => {
    const fetchSingleTodo = async (todoId: number) => {
      const result = await dispatch(fetchTodo(todoId)).unwrap();

      return result;
    }

    fetchSingleTodo(todoIdNumber).then((todo) => {
      const { id, title, description } = todo;
      setTodoProperties({ id, title, description });
    });
  }, [dispatch, navigate, todoIdNumber]);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editTodo({ ...todoProperties })).then((response) => {
      if (response?.meta?.requestStatus === "rejected") {
        console.log(response.payload);
        return;
      }

      navigate('/');
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoProperties({
      ...todoProperties,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Edit todo
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <input
                  value={todoProperties.title}
                  onChange={handleInputChange}
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="title"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="text-sm">
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={todoProperties.description}
                  onChange={handleInputChange}
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="current-title"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditTodoForm;
