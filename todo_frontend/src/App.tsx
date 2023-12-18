import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './components/todos/List';
import UsersList from './components/users/List';
import CreateTodoForm from './components/todos/Add';
import EditTodoForm from './components/todos/Edit';
import NotFound from './components/NotFound';
import RegistrationForm from './components/Register';
import LogoutForm from './components/Logout';
import LoginForm from './components/Login';
import Navbar from './components/NavBar';
import { useAppDispatch } from './redux/store';
import { setUserToken } from './redux/actions/userActions';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const TOKEN_STORAGE_KEY = 'TOKEN_STORAGE_KEY';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token) {
    dispatch(setUserToken(token));
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <TodoList />
            </ProtectedRoute>
          } />

          <Route path="/edit/:todoId" element={
            <ProtectedRoute>
              <EditTodoForm />
            </ProtectedRoute>
          } />

          <Route path="/users" element={<UsersList />} />
          <Route path="/create" element={<CreateTodoForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/logout" element={<LogoutForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
