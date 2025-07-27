import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add the token to headers
api.interceptors.request.use(
  (config) => {
    // We need to check for window because this code can run on the server
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['x-auth-token'] = token;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle 401 errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // We need to check for window because this code can run on the server
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        // Redirect to login page, preventing users from getting stuck.
        // You might want to show a toast message here as well.
        window.location.href = '/login'; 
      }
    }
    return Promise.reject(error);
  }
);

export default api; 