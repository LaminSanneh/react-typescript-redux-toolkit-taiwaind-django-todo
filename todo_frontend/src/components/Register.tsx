import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState, useAppSelector } from '../redux/store';
import { registerUser } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { User } from '../redux/actions/types';

const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registeredUser = useAppSelector((state: RootState) => state.users);
  console.log("here", registeredUser);
  // console.log("here", registerUser.);
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // useEffect(() => {
  //   if (registeredUser) {
  //     navigate('/login');
  //   }
  // }, [registeredUser, navigate]);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser({ username, password })).then(() => {
      navigate('/login');
    });
    // Handle form submission here (e.g., send data to backend)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
