import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import TodoList from './components/todos/List';
import CreateTodoForm from './components/todos/Add';
import EditTodoForm from './components/todos/Edit';
import NotFound from './components/NotFound'; // Create a NotFound component if needed
import RegistrationForm from './components/Register';
import LoginForm from './components/Login';
import Navbar from './components/NavBar';
import logo from './logo.svg';
import './App.css';
import { AppDispatch, useAppDispatch } from './redux/store';
import { setUserToken } from './redux/actions/userActions';

const EditTodoRoute: React.FC = () => {
  const { todoId } = useParams(); // Extract todoId from route params
  return <EditTodoForm todoId={(Number)(todoId + '')} />;
};

const TOKEN_STORAGE_KEY = 'TOKEN_STORAGE_KEY';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);

  useEffect(() => {
    // console.log('hey ya 1', loggedInUser, loggedInUser.token)
    // if (loggedInUser.token) {
    //     navigate('/');
    // }
    // debugger

    // debugger

    if (token) {
      dispatch(setUserToken(token));
    }

  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/create" element={<CreateTodoForm />} />
          <Route path="/edit/:id" element={<EditTodoRoute />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
