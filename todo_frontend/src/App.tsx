import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate, useNavigation } from 'react-router-dom';
import TodoList from './components/todos/List';
import UsersList from './components/users/List';
import CreateTodoForm from './components/todos/Add';
import EditTodoForm from './components/todos/Edit';
import NotFound from './components/NotFound'; // Create a NotFound component if needed
import RegistrationForm from './components/Register';
import LogoutForm from './components/Logout';
import LoginForm from './components/Login';
import Navbar from './components/NavBar';
import logo from './logo.svg';
import './App.css';
import { AppDispatch, useAppDispatch } from './redux/store';
import { setUserToken } from './redux/actions/userActions';
import ProtectedRoute from './components/ProtectedRoute';

const EditTodoRoute: React.FC = () => {
  const { todoId } = useParams(); // Extract todoId from route params
  return <EditTodoForm todoId={(Number)(todoId + '')} />;
};

const TOKEN_STORAGE_KEY = 'TOKEN_STORAGE_KEY';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const initialTokenFromLocalStorage = localStorage.getItem(TOKEN_STORAGE_KEY);

  // if (!initialTokenFromLocalStorage) {
  //   debugger;
  //   navigate('/login');
  // }

  // debugger;
  useEffect(() => {
    // console.log('hey ya 1', loggedInUser, loggedInUser.token)
    // if (loggedInUser.token) {
    //     navigate('/');
    // }
    // debugger

    // const handleStorage = () => {
    //   debugger;
    //   const token = localStorage.getItem(TOKEN_STORAGE_KEY);

    //   if (token) {
    //     dispatch(setUserToken(token));
    //   }
    // }

    // window.addEventListener('storage', handleStorage)
    // return () => window.removeEventListener('storage', handleStorage)
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<ProtectedRoute />}>
            <Route path='/' element={<TodoList />} />
          </Route> */}

          <Route path="/" element={
            <ProtectedRoute>
              <TodoList />
            </ProtectedRoute>
          } />

          <Route path="/users" element={<UsersList />} />
          {/*<Route path="/create" element={<CreateTodoForm />} />
          <Route path="/edit/:id" element={<EditTodoRoute />} />
          <Route path="/register" element={<RegistrationForm />} /> */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/logout" element={<LogoutForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
