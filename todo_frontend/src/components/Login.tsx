import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, setUserToken } from '../redux/actions/userActions';
import { User } from '../redux/actions/types'; // Import your User type
import { AppDispatch, RootState, useAppSelector } from '../redux/store';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [credentials, setCredentials] = useState<User>({ username: '', password: '' });
    const navigate = useNavigate();
    const loggedInUser = useAppSelector((state: RootState) => state.users);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUser(credentials));
    };

    useEffect(() => {
        debugger;
        console.log('hey ya 1', loggedInUser, loggedInUser.token)
        if (loggedInUser.token) {
            dispatch(setUserToken(loggedInUser.token));
            navigate('/');
        }
        // debugger
    }, [loggedInUser.token]);

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>
                        Username:
                        <input type="text" name="username" value={credentials.username} onChange={handleInputChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
