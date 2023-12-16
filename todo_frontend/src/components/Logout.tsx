import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { useEffect } from 'react';

const Logout = function Logout() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    useEffect(() => {=
        dispatch(logoutUser()).then(() => {
            navigate('/login');
        });
    });

    const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
    }


    return (
        <><a href='/' onClick={handleLogout}>Logout</a></>
    )
}

export default Logout
