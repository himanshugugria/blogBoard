import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-800">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-xl p-6">
          <Outlet />
        </div>
      </main>
      
      <Footer />
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-xl font-semibold text-gray-600 animate-pulse">Loading...</div>
    </div>
  );
}

export default App;
