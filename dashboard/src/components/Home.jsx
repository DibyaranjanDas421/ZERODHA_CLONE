
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
      // Check if the user is authenticated
      const checkAuth = async () => {
        try {
          const { data } = await axios.get('http://localhost:3004/auth', { withCredentials: true });
          if (!data.isAuthenticated) {
            navigate('/login'); // If not authenticated, redirect to login
          }
        } catch (error) {
          console.log('Error during auth check:', error);
          navigate('/login');
        }
      };
  
      checkAuth();
    }, [navigate]);
    return ( <>
    <Topbar/>
    <Dashboard/>
    </> );
}

export default Home;
