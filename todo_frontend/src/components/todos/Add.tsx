import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../redux/actions/todoActions';
import { Todo, TodoToCreate } from '../../redux/actions/types';
import { AppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

const CreateTodoForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [todoProperties, setTodoProperties] = useState<TodoToCreate>({ title: '', description: '' });
  const navigate = useNavigate();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addNewTodo({ ...todoProperties })).then((response) => {
      if (response?.meta?.requestStatus === "rejected") {
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

export default CreateTodoForm;
