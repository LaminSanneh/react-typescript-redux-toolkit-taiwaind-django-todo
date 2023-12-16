import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState, useAppSelector } from '../redux/store';
import { registerUser } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { User } from '../redux/actions/types';

// const RegistrationForm: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const registeredUser = useAppSelector((state: RootState) => state.users);
//   console.log("here", registeredUser);
//   // console.log("here", registerUser.);
//   const navigate = useNavigate();

//   const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//   };

//   // useEffect(() => {
//   //   if (registeredUser) {
//   //     navigate('/login');
//   //   }
//   // }, [registeredUser, navigate]);

//   const dispatch = useDispatch<AppDispatch>();

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     dispatch(registerUser({ username, password })).then(() => {
//       navigate('/login');
//     });
//     // Handle form submission here (e.g., send data to backend)
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <div>
//       <h2>Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input type="text" value={username} onChange={handleUsernameChange} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;

export default function Example() {
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
    //     // Handle form submission here (e.g., send data to backend)
    console.log('Username:', username);
    console.log('Password:', password);
  };
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={username}
                  onChange={handleUsernameChange}
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={handlePasswordChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
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
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
