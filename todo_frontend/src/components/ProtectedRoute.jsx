import React from 'react'
import { setUserToken } from '../redux/actions/userActions';
import { useAppDispatch } from '../redux/store';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const TOKEN_STORAGE_KEY = 'TOKEN_STORAGE_KEY';
    const dispatch = useAppDispatch();

    const location = useLocation();
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);

    if (token) {
        dispatch(setUserToken(token));
    }

    return (
        <React.Fragment>
            {(token) ? children : <Navigate state={{ from: location}} to='/login' replace/>}
        </React.Fragment>
    )
    }

export default ProtectedRoute