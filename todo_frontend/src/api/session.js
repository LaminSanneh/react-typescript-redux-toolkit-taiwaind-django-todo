// import { SERVER_URL } from '@/constants'; // Adjust the path based on your project structure
import axios from 'axios';
const SERVER_URL = 'http://localhost:8000';

const CSRF_COOKIE_NAME = 'csrftoken';
const CSRF_HEADER_NAME = 'X-CSRFToken';

const session = axios.create({
    baseURL: SERVER_URL,
    xsrfCookieName: CSRF_COOKIE_NAME,
    xsrfHeaderName: CSRF_HEADER_NAME,
});

export default session;